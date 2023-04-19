function minCoinChange(coins, amount) {
  const cache = [];
  const makeChange = (value) => {
    if (value <= 0) return [];
    if (cache[value]) return cache[value];
    let min = [];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      let newAmount = value - coin;
      if (newAmount >= 0) {
        const newMin = makeChange(newAmount);
        const curMin = [coin, ...newMin];
        if (newMin.length || newAmount === 0) {
          if (!min.length) {
            min = curMin;
          } else if (curMin.length < min.length) {
            min = curMin;
          }
        }
        // if (
        //   (newMin.length < min.length - 1 || !min.length) &&
        //   (newMin.length || newAmount == 0)
        // ) {
        //   min = [coin, ...newMin];
        // }
      }
      console.log("min:", min, "--->", value, i);
    }
    return (cache[value] = min);
  };
  const arr = makeChange(amount);
  // console.log(cache);
  return arr;
}

console.log(minCoinChange([3, 4, 6], 8));
// console.log("结果：" + minCoinChange([1], 1));
