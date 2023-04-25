function minCoinChange(coins, amount) {
  const arr = [];
  function myfn(value) {
    arr.push(value);
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const gap = value - coin;
      if (gap > 0) myfn(gap);
    }
  }
  myfn(amount);
  console.log([...new Set(arr)].sort());

  const arr1 = [amount];
  let n = 0;
  while (n < arr1.length) {
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const gap = arr1[n] - coin;
      if (gap > 0) arr1.push(gap);
    }
    n++;
  }
  console.log([...new Set(arr1)].sort());

  const cache = [];
  let newAmount = 0;

  while (newAmount <= amount) {
    let min = [];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newCoin = newAmount - coin;
      if (newCoin === 0) {
        min = [coin];
      } else if (newCoin > 0) {
        if (cache[newCoin]?.length) {
          const newMin = [coin, ...cache[newCoin]];
          if (!min.length) {
            min = newMin;
          } else if (newMin.length < min.length) {
            min = newMin;
          }
        }
      }
    }
    cache[newAmount] = min;
    newAmount++;
  }

  return cache[amount];
}

console.log("----start----");
console.log(minCoinChange([2, 5, 6], 11));
