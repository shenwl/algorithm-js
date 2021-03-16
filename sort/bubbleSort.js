function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubble(arr, end) {
  for (let i = 0; i < end - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    bubble(arr, i + 1);
  }
}

// test
const arr = [3, 5, 6, 21, 1, 423, 23];
bubbleSort(arr);
console.log(arr);