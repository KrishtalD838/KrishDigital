Import-Module Posh-SSH

$serverIP = "193.233.244.60"
$password = "NFB3v1Fzg5NYfuJpQb"

$securePassword = ConvertTo-SecureString $password -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential("root", $securePassword)

try {
    $session = New-SSHSession -ComputerName $serverIP -Credential $credential -AcceptKey -ErrorAction Stop
    Write-Host "Connected!" -ForegroundColor Green

    Write-Host "Creating Nginx config for mail.krishdigital.eu..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command @'
cat > /etc/nginx/sites-available/mail.krishdigital.eu << 'NGINX'
server {
    listen 80;
    server_name mail.krishdigital.eu;
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
}
NGINX
ln -sf /etc/nginx/sites-available/mail.krishdigital.eu /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx && echo "Nginx OK"
'@ -TimeOut 30
    Write-Host $r.Output

    Write-Host "Getting SSL certificate..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'certbot --nginx -d mail.krishdigital.eu --non-interactive --agree-tos --email info@krishdigital.eu --redirect 2>&1' -TimeOut 120
    Write-Host $r.Output

    Write-Host ""
    Write-Host "Done!" -ForegroundColor Green
    Write-Host "Mail interface: https://mail.krishdigital.eu" -ForegroundColor Cyan

    Remove-SSHSession -SessionId $session.SessionId | Out-Null
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
