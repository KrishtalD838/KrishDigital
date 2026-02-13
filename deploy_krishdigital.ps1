Import-Module Posh-SSH

$serverIP = "193.233.244.60"
$password = "NFB3v1Fzg5NYfuJpQb"

$securePassword = ConvertTo-SecureString $password -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential("root", $securePassword)

try {
    $session = New-SSHSession -ComputerName $serverIP -Credential $credential -AcceptKey -ErrorAction Stop
    Write-Host "Connected to server!" -ForegroundColor Green

    # 1. Clone repo
    Write-Host "Cloning repository..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'mkdir -p /var/www/krishdigital && cd /var/www/krishdigital && if [ -d ".git" ]; then git pull; else git clone https://github.com/KrishtalD838/KrishDigital.git .; fi' -TimeOut 60
    Write-Host $r.Output

    # 2. Stop old container
    Write-Host "Stopping old container..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && docker-compose down 2>/dev/null; echo done' -TimeOut 30
    Write-Host $r.Output

    # 3. Build container (long operation)
    Write-Host "Building container (this may take several minutes)..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && docker-compose build --no-cache 2>&1 | tail -5' -TimeOut 600
    Write-Host $r.Output

    # 4. Start container
    Write-Host "Starting container..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && docker-compose up -d' -TimeOut 60
    Write-Host $r.Output

    # 5. Wait and check
    Write-Host "Checking container..." -ForegroundColor Yellow
    Start-Sleep -Seconds 10
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'docker ps --format "{{.Names}} {{.Status}}" | grep krishdigital && curl -s -o /dev/null -w "HTTP %{http_code}" http://localhost:3003' -TimeOut 30
    Write-Host $r.Output

    # 6. Nginx config
    Write-Host "Creating Nginx config..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command @'
cat > /etc/nginx/sites-available/krishdigital.eu << 'NGINX'
server {
    listen 80;
    server_name krishdigital.eu www.krishdigital.eu;

    location / {
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX
ln -sf /etc/nginx/sites-available/krishdigital.eu /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx && echo "Nginx OK"
'@ -TimeOut 30
    Write-Host $r.Output

    # 7. SSL
    Write-Host "Getting SSL certificate..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'certbot --nginx -d krishdigital.eu -d www.krishdigital.eu --non-interactive --agree-tos --email info@krishdigital.eu --redirect 2>&1' -TimeOut 120
    Write-Host $r.Output

    Write-Host ""
    Write-Host "Deployment completed!" -ForegroundColor Green
    Write-Host "Website: https://krishdigital.eu" -ForegroundColor Cyan

    Remove-SSHSession -SessionId $session.SessionId | Out-Null
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
