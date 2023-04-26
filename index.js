function minCoinChange(coins, value) {
  const cache = [];

  function makeChange(amount) {
    if (amount <= 0) return [];
    if (cache[amount]) return cache[amount];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newCoin = amount - coin;
      if (newCoin === 0) {
        cache[amount] = [coin];
      } else if (newCoin > 0) {
        const newMin = makeChange(newCoin);
        if (newMin.length) {
          const curMin = [coin, ...newMin];
          if (!cache[amount]) {
            cache[amount] = curMin;
          } else if (curMin.length < cache[amount].length) {
            cache[amount] = curMin;
          }
        }
      }
    }
    return cache[amount] || [];
  }
  makeChange(value);
  return cache[value];
}

console.log("----start----");
console.log(minCoinChange([2, 5, 6], 11));
