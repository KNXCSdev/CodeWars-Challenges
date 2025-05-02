function score(dice: string[]): number {
  const counts: { [key: string]: number } = {};

  dice.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  let result = 0;

  for (let i = 1; i <= 6; i++) {
    const count = counts[i.toString()] || 0;
    const triplets = Math.floor(count / 3);
    const remainder = count % 3;

    if (triplets > 0) {
      if (i === 1) {
        result += 1000;
      } else {
        result += i * 100;
      }
    }

    if (i === 1) {
      result += remainder * 100;
    } else if (i === 5) {
      result += remainder * 50;
    }
  }

  return result;
}

score(["4", "5", "5", "5", "1"]);
