const arr = [6, 7, 0, 5, 9, -3, 17, 10, -2];

function radixSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  if (max === min) return arr;
  const maxDigit = Math.floor(Math.log10(max - min)) + 1;

  let radixBase = 10;
  for (var i = 0; i < maxDigit; i++, radixBase *= 10) {
    const buketArr = [];
    for (var j = 0; j < arr.length; j++) {
      const difference = arr[j] - min;
      const bitSignificance = radixBase / 10;
      const buketIndex = Math.floor((difference % radixBase) / bitSignificance);
      if (!buketArr[buketIndex]) buketArr[buketIndex] = [];
      buketArr[buketIndex].push(arr[j]);
    }
    arr = [];
    for (var j = 0; j < buketArr.length; j++) {
      if (buketArr[j]) arr.push(...buketArr[j]);
    }
  }
  return arr;
}

console.log(radixSort(arr));
