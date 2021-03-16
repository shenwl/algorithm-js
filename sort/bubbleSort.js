function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubble(arr, end) {
  let sorted = true;
  for (let i = 0; i < end - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false;
      swap(arr, i, i + 1);
    }
  }
  return sorted;
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const sorted = bubble(arr, i + 1);
    if (sorted) return;
  }
}

// test
const arr = [3, 5, 6, 21, 1, 423, 23];
bubbleSort(arr);
console.log(arr);