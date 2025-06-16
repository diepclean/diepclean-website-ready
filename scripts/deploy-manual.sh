
#!/bin/bash

echo "🚀 Manual deployment script voor Strato hosting"
echo "=============================================="

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Dist folder niet gevonden. Voer eerst 'npm run build' uit."
    exit 1
fi

echo "✅ Dist folder gevonden"
echo "📁 Inhoud van dist folder:"
ls -la dist/

echo ""
echo "📋 Instructies voor handmatige upload naar Strato:"
echo "1. Zip de inhoud van de 'dist' folder (niet de folder zelf)"
echo "2. Log in op je Strato FTP/File Manager"
echo "3. Upload alle bestanden naar je htdocs folder"
echo "4. Overschrijf bestaande bestanden"
echo ""
echo "💡 Tip: Je kunt ook de FTP credentials instellen in GitHub Secrets"
echo "   en dan de automatische deployment gebruiken."
