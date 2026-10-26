// Chrome loads this as a service worker; Firefox loads decode.js first via
// manifest "scripts", so only import it where importScripts exists.
if (typeof importScripts === "function") importScripts("decode.js");

const MENU_ID = "binary-google-search";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Decode binary and search Google",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== MENU_ID) return;

  const decoded = decodeBinary(info.selectionText);
  if (decoded === null || !decoded.trim()) {
    await notify("The selected text isn't valid binary (use 8-bit groups of 0s and 1s).");
    return;
  }

  const url = "https://www.google.com/search?q=" + encodeURIComponent(decoded.trim());
  const props = { url };
  if (tab && tab.index >= 0) props.index = tab.index + 1;
  try {
    await chrome.tabs.create(props);
  } catch (err) {
    console.error("Failed to open search tab:", err);
    await notify("Couldn't open the search tab: " + err.message);
  }
});

async function notify(message) {
  try {
    await chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon128.png",
      title: "Binary Decode & Search",
      message,
    });
  } catch (err) {
    console.error("Failed to show notification:", err);
  }
}
