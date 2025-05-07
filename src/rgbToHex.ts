function rgb(r: number, g: number, b: number) {
  function toHex(value: number) {
    const clamped = Math.max(0, Math.min(255, value));
    const hex = clamped.toString(16).toUpperCase();
    return hex.padStart(2, "0");
  }

  return toHex(r) + toHex(g) + toHex(b);
}
