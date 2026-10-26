# Binary Decode & Search

A browser extension for Chrome and Firefox. Highlight binary text on any page, right-click, and choose **Decode binary and search Google**. The binary is decoded to text and a Google search for it opens in a new tab next to the current one.

Accepted input: 8-bit groups separated by spaces (`01001000 01101001`), 7-bit groups (`1001000 1101001`), or one unbroken run whose length is a multiple of 8 (`0100100001101001`). UTF-8 is supported. If the selection isn't valid binary, a notification says so and no tab opens.

## Try it locally

**Chrome:** open `chrome://extensions`, turn on Developer mode, click **Load unpacked**, and pick the `src` folder.

**Firefox (121+):** open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on**, and pick `src/manifest.json`.

## Development

```sh
npm test          # decoder tests
npm run package   # builds dist/binary-decode-search-v<version>.zip
```

Bump `version` in `src/manifest.json` before each store upload. Publishing a GitHub release builds the zip and attaches it to the release.

## Publishing

`CHROMEWEBSTORE.md` has the step-by-step guide for the Chrome Web Store and Firefox Add-ons, plus ready-to-paste listing text and permission justifications. The privacy policy is served by GitHub Pages from `docs/`.

## Layout

- `src/` – the extension (manifest, background script, decoder, icons)
- `test/` – decoder tests
- `docs/` – GitHub Pages site with the privacy policy
- `store-assets/` – store screenshot and promo tile
- `scripts/package.sh` – builds the upload zip
