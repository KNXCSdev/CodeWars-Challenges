function isValidIP(str: string) {
  const splittedString = str.split(".");

  if (splittedString.length !== 4) return false;

  for (const num of splittedString) {
    if (!/^\d+$/.test(num)) return false;
    if (num.length > 1 && num.startsWith("0")) return false;
    const number = Number(num);
    if (number < 0 || number > 255) return false;
  }

  return true;
}

isValidIP("124.124.54.34");
