const arr = [6, 7, 8, 5, 9, 3, 4, 1, 2];

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

// console.log(quickSort(arr));

function quickSort1(arr, left, right) {
  if (arr.length < 2) return arr;
  const l = left || 0;
  const r = right || arr.length - 1;
  const index = partition(arr, l, r);
  if (l < index - 1) quickSort1(arr, l, index - 1);
  if (index < r) quickSort1(arr, index, r);
  return arr;
}
function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}
console.log(quickSort1(arr));
