function generateHashtag(str: string) {
  if (!str) return false;
  const strArr = str.trim().split(" ");

  if (strArr[0] === "") return false;

  const mutatedArr = strArr.map((word) => {
    const firstLetter = word.slice(0, 1).toUpperCase();
    const restLetters = word.slice(1);

    return firstLetter + restLetters;
  });

  const joinedStr = mutatedArr.join("");
  if (joinedStr.length > 139) return false;

  return "#" + joinedStr;
}

generateHashtag("test hallo kam");
