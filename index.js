const arr = [6, 7, 0, 5, 9, -3, 17, 10, -2, 1];

function heapSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const cur = arr[i + 1];
    let index = i + 1;
    for (; index > 0 && cur < arr[index - 1]; index--) {
      arr[index] = arr[index - 1];
    }
    arr[index] = cur;
  }
  return arr;
}

console.log(heapSort(arr));
