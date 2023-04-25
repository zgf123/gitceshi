function minCoinChange(coins, amount) {
  const cache = [];
  function makeChange(value) {
    if (value <= 0) return [];
    if (cache[value]) return cache[value];
    let min = [];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newValue = value - coin;
      if (newValue === 0) {
        min = [coin];
      } else if (newValue > 0) {
        const newMin = makeChange(newValue);
        if (newMin.length) {
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

console.log("----start----");
console.log(minCoinChange([1, 3, 5, 7, 9], 13));

// let n = 1;
// for (let i = 0; i < 100; i++) {
//   n += 1;
// }
// console.log(n);

function recursive(m, i) {
  return i < 100 ? recursive(m + 1, i + 1) : m;
}
console.log(recursive(1, 0));
