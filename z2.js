function minCoinChange(coins, amount) {
  const cache = [];
  for (let i = 0; i < coins.length; i++) {
    cache[i] = [];
    for (let j = 0; j <= amount; j++) {
      const coin = coins[i];
      const newAmount = j - coin;
      if (newAmount === 0) {
        cache[i][j] = 1;
      } else if (newAmount < 0) {
        cache[i][j] = i >= 1 ? cache[i - 1][j] : 0;
      } else if (newAmount > 0) {
        if (cache[i][newAmount] === 0) {
          cache[i][j] = i >= 1 ? cache[i - 1][j] : 0;
        } else {
          cache[i][j] = 1 + cache[i][newAmount];
        }
      }
    }
  }
  return cache;
}

console.log("----start----");
console.log(minCoinChange([1, 3, 5, 7], 8));
