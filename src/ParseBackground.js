export function parseBackground(background) {
  if (!background) return { color: null, imageUrl: null };

  const bg = background.trim();

  // Background-image case: url("something")
  const urlMatch = bg.match(/url\((['"]?)(.*?)\1\)/);
  if (urlMatch) {
    return {
      color: null,
      imageUrl: urlMatch[2],
    };
  }

  // Otherwise treat as a color (hex, rgb, gradient, etc.)
  return {
    color: bg,
    imageUrl: null,
  };
}
