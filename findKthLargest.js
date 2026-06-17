function findKthLargest(nums, k) {
    // Your implementation here
    checkInput(nums, k);

    const copy = nums.slice();
    const wantIdx = copy.length - k;
  
    return quickselect(copy, 0, copy.length - 1, wantIdx);
};

function quickselect(arr, start, end, wantIdx) {
    let lo = start;
    let hi = end;
  
    while (lo <= hi) {
      const p = partition(arr, lo, hi);
  
      if (p === wantIdx) {
        return arr[p];
      }
      if (p < wantIdx) {
        lo = p + 1;
      } else {
        hi = p - 1;
      }
    }
  
    throw new Error('selection failed');
}

  
function checkInput(arr, k) {
    if (!Array.isArray(arr)) {
      throw new Error('expected an array');
    }
    if (arr.length === 0) {
      throw new Error('array is empty');
    }
    if (!Number.isInteger(k) || k < 1 || k > arr.length) {
      throw new Error(`k must be between 1 and ${arr.length}`);
    }
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let split = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, split, i);
      split++;
    }
}

  swap(arr, split, end);
  return split;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output
