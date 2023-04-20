function minCoinChange(coins, amount) {
  const cache = [];
  for (let i = 0; i <= amount; i++) {
    cache[i] = [];
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      const newAmount = i - coin;
      if (newAmount === 0) {
        cache[i] = [coin];
      } else if (newAmount > 0) {
        if (cache[newAmount].length) {
          const oldMin = cache[i];
          const newMin = [coin, ...cache[newAmount]];
          if (!oldMin.length) {
            cache[i] = newMin;
          } else if (newMin.length < oldMin.length) {
            cache[i] = newMin;
          }
        }
      }
    }
  }

  return cache[amount];
}

console.log("----start----");
console.log(minCoinChange([1, 3, 5, 7, 9], 13));
