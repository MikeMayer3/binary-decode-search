#!/usr/bin/env bash
# Builds the zip to upload to the Chrome Web Store and Firefox Add-ons.
set -euo pipefail
cd "$(dirname "$0")/.."
VERSION=$(node -p "require('./src/manifest.json').version")
mkdir -p dist
OUT="dist/binary-decode-search-v${VERSION}.zip"
rm -f "$OUT"
(cd src && zip -r -X "../$OUT" . -x ".DS_Store")
echo "Packaged: $OUT"
