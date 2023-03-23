const arr = [6, 7, 0, 5, 9, -3, 17, 10, -2, 1];

var len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function heapSort(arr) {
  // 建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }

  for (var i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    len--;
    heapify(arr, 0);
  }
  return arr;
}

function heapify(arr, i) {
  // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest);
  }
}

console.log(heapSort(arr));
