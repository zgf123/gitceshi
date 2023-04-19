function minCoinChange(coins, amount) {
  const cache = [];
  function makeChange(value) {
    if (value <= 0) return [];
    if (cache[value]) return cache[value];
    let min = [];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newValue = value - coin;
      if (newValue >= 0) {
        const newMin = makeChange(newValue);
        if (newMin.length || newValue === 0) {
          const curMin = [coin, ...newMin];
          if (!min.length) {
            min = curMin;
          } else if (curMin.length < min.length) {
            min = curMin;
          }
        }
      }
    }
    return (cache[value] = min);
  }
  return makeChange(amount);
}

console.log(minCoinChange([3, 4, 6], 8));
