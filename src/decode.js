// Decodes a string of binary digits into text.
// Accepts bytes separated by whitespace ("01001000 01101001") or one
// continuous run whose length is a multiple of 8 ("0100100001101001").
// Returns null if the input is not valid binary.
function decodeBinary(input) {
  const text = (input || "").trim();
  if (!text || /[^01\s]/.test(text)) return null;

  let groups = text.split(/\s+/);
  if (groups.length === 1) {
    if (text.length % 8 !== 0) return null;
    groups = text.match(/.{8}/g);
  }
  if (groups.some((g) => g.length > 8)) return null;

  const bytes = new Uint8Array(groups.map((g) => parseInt(g, 2)));
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    // Not valid UTF-8, fall back to one character per byte.
    return String.fromCharCode(...bytes);
  }
}

if (typeof module !== "undefined") module.exports = { decodeBinary };
