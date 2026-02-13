Import-Module Posh-SSH

$serverIP = "193.233.244.60"
$password = "NFB3v1Fzg5NYfuJpQb"

$securePassword = ConvertTo-SecureString $password -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential("root", $securePassword)

try {
    $session = New-SSHSession -ComputerName $serverIP -Credential $credential -AcceptKey -ErrorAction Stop
    Write-Host "Connected!" -ForegroundColor Green

    Write-Host "Pulling latest code..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && git pull' -TimeOut 60
    Write-Host $r.Output

    Write-Host "Rebuilding container..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && docker-compose down' -TimeOut 30
    Write-Host $r.Output

    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && docker-compose build --no-cache 2>&1 | tail -5' -TimeOut 600
    Write-Host $r.Output

    Write-Host "Starting container..." -ForegroundColor Yellow
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'cd /var/www/krishdigital && docker-compose up -d' -TimeOut 60
    Write-Host $r.Output

    Start-Sleep -Seconds 10
    $r = Invoke-SSHCommand -SessionId $session.SessionId -Command 'docker ps --format "{{.Names}} {{.Status}}" | grep krishdigital && curl -s -o /dev/null -w "HTTP %{http_code}" http://localhost:3003' -TimeOut 30
    Write-Host $r.Output

    Write-Host ""
    Write-Host "Redeployed! https://krishdigital.eu" -ForegroundColor Green

    Remove-SSHSession -SessionId $session.SessionId | Out-Null
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
