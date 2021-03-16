function _mergeSort(arr, l, r) {
  if (r - l <= 1) return;

  const mid = Math.floor((l + r + 1) / 2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid, r);

  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  const left = arr.slice(l, mid);
  const right = arr.slice(mid, r);
  
  // 1,3,5,7,sentry | 2,4,6,8,sentry
  left[left.length] = Infinity;
  right[right.length] = Infinity;
  
  let i = 0, j = 0;

  for (let k = l; k < r; k++) {
    if (left[i] < right[j]) {
      arr[k] = left[i++];
    } else {
      arr[k] = right[j++];
    }
  }
}

function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length);
}

// test
const arr = [3, 5, 6, 21, 1, 423, 23, 100, 200, 55, 66, 77, 10, 1, 2];
mergeSort(arr);
console.log(arr);