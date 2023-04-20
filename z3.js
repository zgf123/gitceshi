function minCoinChange(coins, amount) {
  const cache = [];
  for (let i = 0; i < coins.length; i++) {
    cache[i] = [];
    const coin = coins[i];
    for (let j = 0; j <= amount; j++) {
      cache[i][j] = [];
      const newAmount = j - coin;
      if (newAmount === 0) {
        cache[i][j] = [coin];
      } else if (newAmount < 0) {
        cache[i][j] = i >= 1 ? cache[i - 1][j] : [];
      } else if (newAmount > 0) {
        if (cache[i][newAmount].length) {
          cache[i][j] = [...cache[i][newAmount], coin];
        } else {
          cache[i][j] = i >= 1 ? cache[i - 1][j] : [];
        }
      }
    }
  }
  return cache[coins.length - 1][amount];
}

console.log("----start----");
console.log(minCoinChange([1, 3, 5, 7, 9], 8));
