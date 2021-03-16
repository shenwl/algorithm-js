function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];

    let j;
    for (j = i; j > 0 && arr[j - 1] > cur; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = cur;
  }
}

// test
const arr = [3, 5, 6, 21, 1, 423, 23];
insertionSort(arr);
console.log(arr);