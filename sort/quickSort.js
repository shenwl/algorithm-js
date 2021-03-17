function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, l, r) {
  let x = arr[l];

  let i = l + 1;
  let j = r;

  // pivot | ---left-- | --mid -- | --right-- |
  while (i !== j) {
    if (arr[i] < x) {
      i++;
    } else {
      swap(arr, i, j - 1);
      j--;
    }
  }
  swap(arr, i - 1, l);
  return i - 1;
}

function _qucikSort(arr, l, r) {
  if (r - l <= 1) return;

  // |--left--|mid|--right--|
  let mid = partition(arr, l, r);

  _qucikSort(arr, l, mid);
  _qucikSort(arr, mid + 1, r);
}


function qucikSort(arr) {
  if (arr.length <= 1) return;

  _qucikSort(arr, 0, arr.length);
}

// test
const arr = [3, 5, 6, 21, 1, 423, 23, 100, 200, 55, 66, 77, 10, 1, 2];
qucikSort(arr);
console.log(arr);