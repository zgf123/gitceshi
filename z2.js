function minCoinChange(coins, amount) {
  // 生成找零矩阵
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

  // 获取找零的钱数
  const result = [];
  let index = coins.length - 1;
  let value = amount;
  while (index >= 0 && cache[index][value] > 0) {
    if (index > 0 && cache[index][value] === cache[index - 1][value]) {
      index--;
    } else {
      const coin = coins[index];
      result.unshift(coin);
      value = value - coin;
    }
  }
  return result;
}

console.log("----start----");
console.log(minCoinChange([1, 3, 5, 7, 9], 8));
