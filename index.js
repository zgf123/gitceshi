const arr = [6, 7, 8, 5, 9, 3, 4, 1, 2];

function countingSort(arr) {
  if (arr.length < 2) return arr;
  const countArr = new Array(Math.max(...arr) + 1);
  for (let i = 0; i < arr.length; i++) {
    if (!countArr[arr[i]]) countArr[arr[i]] = 0;
    countArr[arr[i]]++;
  }
  let index = 0;
  for (let j = 0; j < countArr.length; j++) {
    while (countArr[j] > 0) {
      arr[index++] = j;
      countArr[j]--;
    }
  }
  return arr;
}

console.log(countingSort(arr));
