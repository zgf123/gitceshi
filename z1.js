const arr = [6, 7, 0, -5, 1, 11, 9, 3, 17, 10, 2];

function minCoins(coins, amount) {
  coins.unshift(0);
  const cache = [];
  for (let i = 0; i < coins.length; i++) {
    if (!cache[i]) cache[i] = [];
    for (let j = 0; j <= amount; j++) {
      if (i === 0) {
        cache[i][j] = 0;
      } else {
        if (j >= coins[i]) {
          const cur = 1 + cache[i][j - coins[i]];
          const prev = cache[i - 1][j];
          cache[i][j] = prev ? Math.min(prev, cur) : cur;
        } else {
          cache[i][j] = cache[i - 1][j];
        }
      }
    }
  }
  return findValue(coins, cache, amount);
}

function findValue(coins, cache, amount) {
  let i = coins.length - 1;
  const result = [];
  while (i > 0 && amount > 0) {
    if (cache[i][amount] < cache[i - 1][amount]) {
      result.push(coins[i]);
      amount = amount - coins[i];
    } else {
      i--;
    }
  }

  return result;
}

console.log(minCoins([1, 3, 4, 5, 7], 9));
