function minCoinChange(coins, value) {
  // 先找出所有找零可能用到的硬币
  const amounts = [value];
  for (let n = 0; n < amounts.length; n++) {
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const gap = amounts[n] - coin;
      if (gap > 0) amounts.push(gap);
    }
  }

  // 需要从小到大排列，因为在进行递归时是在归阶段进行找零的
  const sortedAmounts = [...new Set(amounts)].sort((a, b) => a - b);
  const cache = [];

  // 进行找零计算
  for (let n = 0; n < sortedAmounts.length; n++) {
    let amount = sortedAmounts[n];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newAmount = amount - coin;
      if (newAmount === 0) {
        cache[amount] = [coin];
      } else if (newAmount > 0) {
        if (cache[newAmount]?.length) {
          const newMin = [coin, ...cache[newAmount]];
          if (!cache[amount]) {
            cache[amount] = newMin;
          } else if (newMin.length < cache[amount].length) {
            cache[amount] = newMin;
          }
        }
      }
    }
  }

  return cache[value];
}

console.log("----start----");
console.log(minCoinChange([2, 5, 6], 11));
