function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getMaxIndex(arr, start, end) {
  let maxIndex = start;
  for (let i = start; i < end; i++) {
    maxIndex = (arr[i] > arr[maxIndex]) ? i : maxIndex;
  }
  return maxIndex;
}

function selectionSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = getMaxIndex(arr, 0, i + 1);
    swap(arr, i, j)
  }
}

// test
const arr = [3, 5, 6, 21, 1, 423, 23];
selectionSort(arr);
console.log(arr);