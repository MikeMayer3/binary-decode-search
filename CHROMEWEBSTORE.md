# Chrome Web Store Listing — Binary Decode & Search

> Last Updated: 2026-10-26

## How to publish (one-time setup, then about 15 minutes)

1. **Register as a developer.** Go to https://chrome.google.com/webstore/devconsole, sign in with the Google account you want to publish under, accept the agreement, and pay the one-time $5 registration fee. Verify your contact email when asked.
2. **Privacy policy.** In the GitHub repo, go to Settings → Pages, set Source to "Deploy from a branch", branch `main`, folder `/docs`, and save. The policy will then be live at https://mikemayer3.github.io/binary-decode-search/privacy.html.
3. **Upload.** Get the zip from the latest GitHub release (or run `npm run package` to build `dist/binary-decode-search-v1.0.0.zip`). In the dashboard click **New item** and upload it.
4. **Store listing tab.** Paste the description, category and language below. Upload `store-assets/screenshot-1280x800.png` as the screenshot and `store-assets/promo-tile-440x280.png` as the small promo tile. The 128×128 icon comes from the zip automatically.
5. **Privacy tab.** Paste the single purpose and the two permission justifications below. Under "Are you using remote code?" choose **No**. Under data usage, tick nothing (the extension collects no user data), tick the three certifications, and paste your privacy policy URL.
6. **Distribution tab.** Choose **Public** (anyone can find it) or **Unlisted** (only people with the link).
7. Click **Submit for review**. Reviews usually take a few days. You'll get an email when it's approved or if they need changes.

## Store Listing

**Extension Name**
Binary Decode & Search

**Short Description**
Highlight binary text, right-click, and search Google for what it says.

**Detailed Description**
Turn binary into words with one right-click. Highlight a string of 0s and 1s on any web page, right-click, and choose "Decode binary and search Google". The text is decoded instantly and a Google search for it opens in a new tab.

Features:
Decodes bytes separated by spaces (01101000 01101001) or one continuous string (0110100001101001)
Also accepts 7-bit groups
Handles accented characters and emoji
Opens the search right next to your current tab
Tells you if the selection isn't valid binary, so nothing happens by surprise

How to use it:
1. Highlight binary text on any page.
2. Right-click the selection.
3. Choose "Decode binary and search Google".

Privacy: the extension only runs when you choose it from the menu. Decoding happens on your device, and nothing is collected, stored, or sent anywhere except the Google search you asked for.

**Category**
Search Tools

**Single Purpose**
Decodes binary text the user selects and opens a web search for the decoded text.

**Primary Language**
English

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon | 128×128 PNG | ✅ Ready | icons/icon128.png |
| Screenshot 1 | 1280×800 | ✅ Ready | store-assets/screenshot-1280x800.png |
| Small Promo Tile | 440×280 | ✅ Ready | store-assets/promo-tile-440x280.png |

### Screenshot Notes
Screenshot 1 is an illustrated three-step walkthrough. A real screenshot of the right-click menu in action would make a good second screenshot (Chrome screenshots must be resized to 1280×800 or 640×400).

## Permissions Justification

| Permission | Type | Justification |
|------------|------|---------------|
| contextMenus | permissions | Adds the "Decode binary and search Google" item to the right-click menu when text is selected. This menu item is the extension's only way to start a decode and search. |
| notifications | permissions | Shows a short message when the selected text isn't valid binary (or the search tab can't be opened), so the user knows why no search opened. |

No host permissions are requested. The extension never reads page content; it only receives the selected text Chrome passes to the menu click.

## Privacy & Data Use

**Does the extension collect user data?** No

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

## Privacy Policy

**Privacy Policy URL**
https://mikemayer3.github.io/binary-decode-search/privacy.html

## Distribution

**Visibility**: Public
**Regions**: All regions

## Developer Info

**Publisher Name**: [Your name]
**Contact Email**: [Your email, shown publicly]
**Support URL**: https://github.com/MikeMayer3/binary-decode-search/issues
**Homepage URL**: https://github.com/MikeMayer3/binary-decode-search

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0 | 2026-10-26 | First release | Draft |

## Firefox Add-ons (addons.mozilla.org)

The same zip works for Firefox. Create a free account at https://addons.mozilla.org/developers/, click **Submit a New Add-on**, choose "On this site" to list it publicly, upload the same zip, and reuse the description and privacy policy above. There is no fee. The add-on ID is set to `binary-decode-search@MikeMayer3` in manifest.json and can't be changed after the first upload.
