const assert = require('node:assert/strict');
const { findKthLargest } = require('./findKthLargest');

// given examples
assert.equal(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
assert.equal(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);

// k = 1 and k = n
assert.equal(findKthLargest([10, 2, 7, 3], 1), 10);
assert.equal(findKthLargest([3, 2, 1, 5, 6, 4], 6), 1);

// single item
assert.equal(findKthLargest([42], 1), 42);

// bad input
assert.throws(() => findKthLargest([], 1), /array is empty/);
assert.throws(() => findKthLargest([1, 2, 3], 0), /k must be between/);
assert.throws(() => findKthLargest([1, 2, 3], 4), /k must be between/);

// shouldn't touch the original
const input = [9, 1, 4];
findKthLargest(input, 2);
assert.deepEqual(input, [9, 1, 4]);

console.log('ok');
