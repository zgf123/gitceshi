function minCoinChange(coins, amount) {
  const cache = [];
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = 0; j <= amount; j++) {
      if (!cache[j]) cache[j] = [];
      const newAmount = j - coin;
      if (newAmount === 0) {
        cache[j] = [coin];
      } else if (newAmount > 0) {
        if (cache[newAmount].length) {
          const oldMin = cache[j];
          const newMin = [coin, ...cache[newAmount]];
          if (!oldMin.length) {
            cache[j] = newMin;
          } else if (newMin.length < oldMin.length) {
            cache[j] = newMin;
          }
        }
      }
    }
  }
  return cache[amount];
}

console.log("----start----");
console.log(minCoinChange([1, 3, 5, 7, 9], 13));
