#!/bin/bash

echo "🚀 Deploying Portfolio to GitHub Pages..."
echo ""

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "✅ Deployment complete!"
echo "🎉 Your portfolio is live at: https://harshavardhan29.github.io/portfolio/"
