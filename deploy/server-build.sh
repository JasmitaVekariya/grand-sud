#!/usr/bin/env bash
# Run on cPanel server (SSH or Terminal) from the app root.
set -euo pipefail

APP_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$APP_ROOT"

echo "==> Grand Sud deploy from: $APP_ROOT"
echo "==> Expected assets path: $APP_ROOT/public/assets"

if [[ ! -f package.json ]]; then
  echo "ERROR: package.json not found. Run this script from the app root." >&2
  exit 1
fi

if [[ ! -d public/assets ]]; then
  echo "ERROR: public/assets not found at $APP_ROOT/public/assets" >&2
  exit 1
fi

ASSET_COUNT="$(find public/assets -maxdepth 1 -type f | wc -l | tr -d ' ')"
echo "==> Found $ASSET_COUNT files in public/assets"

echo "==> git pull"
git pull origin main

echo "==> npm install"
npm install

echo "==> npm run build"
npm run build

echo ""
echo "Deploy build finished."
echo "Restart your Node.js app in cPanel (Setup Node.js App -> Restart)."
echo "Then verify: npm run verify:assets -- https://YOUR_DOMAIN"
