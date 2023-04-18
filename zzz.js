const arr = [6, 7, 0, -5, 1, 11, 9, 3, 17, 10, 2];

// 简单方式
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const pivot = arr.splice(middle, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function binarySearch(arr, value) {
  const newArr = quickSort(arr);
  let l = 0;
  let r = newArr.length - 1;
  while (l !== r) {
    const mid = Math.floor((l + r) / 2);
    if (newArr[mid] === value) return mid;
    if (newArr[mid] < value) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch(arr, 1));

function minCoinChange(coins, amount) {
  const cache = [];
  const makeChange = (value) => {
    if (!value) return [];
    if (cache[value]) return cache[value];
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        console.log("min: [ " + min + " ] ---> " + amount);
      }
    }
    return (cache[value] = min);
  };
  const arr = makeChange(amount);
  // console.log(cache);
  return arr;
}

// console.log(minCoinChange([1, 5, 10, 25], 36));
console.log("结果：" + minCoinChange([1], 1));

function fb1(n) {
  if (n < 1) throw new Error("输入的数字不能小于1");
  if (n == 1 || n == 2) return 1;
  return fb1(n - 1) + fb1(n - 2);
}

function fb2(n) {
  if (n < 1) throw new Error("输入的数字不能小于1");
  const arr = [0, 1, 1];
  function calc(n) {
    if (n < 2) return arr[n];
    if (arr[n]) return arr[n];
    let data = calc(n - 1) + calc(n - 2);
    arr[n] = data;
    return data;
  }
  return calc(n);
}

function fb3(n) {
  var a = [0, 1, 1];
  if (n < 1) throw new Error("输入的数字不能小于1");
  if (n >= 3) {
    for (var i = 3; i <= n; i++) {
      a[i] = a[i - 1] + a[i - 2];
    }
  }
  return a[n];
}

function fb4(n) {
  var pre = 0; //表示前一个值
  var cur = 1; //表示后一个值
  var data; //表示当前值

  if (n < 0) throw new Error("输入的数字不能小于1");
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n > 2) {
    for (var i = 2; i <= n; i++) {
      data = pre + cur;
      pre = cur;
      cur = data;
    }
  }
  return data;
}

// console.time();
// console.log(fb1(40));
// console.log(fb2(40));
// console.log(fb3(40));
// console.log(fb4(40));
// console.timeEnd();
