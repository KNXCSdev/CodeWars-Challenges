function goodVsEvil(good: string, evil: string) {
  const goodWorths = [1, 2, 3, 3, 4, 10];
  const evilWorths = [1, 2, 2, 2, 3, 5, 10];

  const goodTotal = good.split(" ").reduce((acc, curr, i) => acc + goodWorths[i] * Number(curr), 0);

  const evilTotal = evil.split(" ").reduce((acc, curr, i) => acc + evilWorths[i] * Number(curr), 0);

  if (goodTotal > evilTotal) return "Battle Result: Good triumphs over Evil";
  if (evilTotal > goodTotal) return "Battle Result: Evil eradicates all trace of Good";
  return "Battle Result: No victor on this battle field";
}

goodVsEvil("1 1 1 1 1 1", "1 2 3 4 1 2 1");
