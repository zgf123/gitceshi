const arr = [6, 7, 0, 6, 12, 55, 34, -100, 999, 346, 5, 9, -3, 17, 10, -2, 1];

function heapSort(arr) {
  // 创建大顶堆
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i);
  }

  const aux = [];
  while (arr.length > 1) {
    aux.unshift(arr.shift());
    arr.unshift(arr.pop());
    heapify(arr, 0);
  }
  arr.push(...aux);
  return arr;
}

function heapify(arr, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let top = i;

  if (left < arr.length && arr[left] > arr[top]) top = left;
  if (right < arr.length && arr[right] > arr[top]) top = right;

  if (top !== i) {
    [arr[top], arr[i]] = [arr[i], arr[top]];
    heapify(arr, top);
  }
}

console.log(heapSort(arr));
