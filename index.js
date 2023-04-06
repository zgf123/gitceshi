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

console.log(binarySearch(arr, 1));
