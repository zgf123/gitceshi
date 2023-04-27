function minCoinChange(coins, value) {
  const cache = [];
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    cache[i] = [];
    for (let j = 0; j <= value; j++) {
      cache[i][j] = 0;
      const newCoin = j - coin;
      if (newCoin === 0) {
        cache[i][j] = 1;
      } else if (newCoin < 0) {
        cache[i][j] = cache[i - 1]?.[j] || 0;
      } else {
        if (cache[i][newCoin]) {
          const min = cache[i][newCoin] + 1;
          const preMin = cache[i - 1]?.[j] || 0;
          cache[i][j] = min;
          if (preMin && preMin < min) {
            cache[i][j] = preMin;
          }
        } else {
          cache[i][j] = cache[i - 1]?.[j] || 0;
        }
      }
    }
  }

  const changes = [];
  let i = coins.length - 1;
  let amount = value;
  while (cache[i][amount] > 0) {
    if (cache[i - 1]?.[amount] && cache[i][amount] === cache[i - 1][amount]) {
      i--;
    } else {
      changes.push(coins[i]);
      amount -= coins[i];
    }
  }

  return changes;
}

console.log("----start----");
console.log(minCoinChange([1, 6, 5, 2], 11));
