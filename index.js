const arr = [6, 7, 8, 5, 9, 3, 4, 1, 2];

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let l = left;
  let r = right;
  while (l < r) {
    while (arr[l] < pivot) l++;
    while (arr[r] > pivot) r--;
    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return l;
}

console.log(quickSort(arr));
