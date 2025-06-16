
Write-Host "🚀 Manual deployment script voor Strato hosting" -ForegroundColor Green
Write-Host "=============================================="

# Check if dist folder exists
if (!(Test-Path -Path "dist")) {
    Write-Host "❌ Dist folder niet gevonden. Voer eerst 'npm run build' uit." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dist folder gevonden" -ForegroundColor Green
Write-Host "📁 Inhoud van dist folder:" -ForegroundColor Cyan
Get-ChildItem -Path "dist" | Format-Table Name, Length, LastWriteTime

Write-Host ""
Write-Host "📋 Instructies voor handmatige upload naar Strato:" -ForegroundColor Yellow
Write-Host "1. Zip de inhoud van de 'dist' folder (niet de folder zelf)"
Write-Host "2. Log in op je Strato FTP/File Manager"
Write-Host "3. Upload alle bestanden naar je htdocs folder"
Write-Host "4. Overschrijf bestaande bestanden"
Write-Host ""
Write-Host "💡 Tip: Je kunt ook de FTP credentials instellen in GitHub Secrets" -ForegroundColor Cyan
Write-Host "   en dan de automatische deployment gebruiken."
