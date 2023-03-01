const arr = [6, 7, 8, 5, 9, 3, 4, 1, 2];

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[left];
  while (left < right) {
    while (left < right && arr[right] > pivot) --right;
    arr[left] = arr[right];
    while (left < right && arr[left] <= pivot) ++left;
    arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left;
}

console.log(quickSort(arr));
