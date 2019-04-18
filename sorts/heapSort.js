// complexity n * logn
// memory constant

function heapSort(array) {
  buildHeap(array);

  for(let k = array.length -1; k>0; k--) {
    swap(array, k, 0);
    heapify(array, 0, k)
  }

  return array;
}

function buildHeap(array) {
  let len = array.length;
  for (let i = Math.floor(len/2)-1; i>=0; i--) {
    heapify(array, i, len);
  }
}

function heapify(array, j, len) {
  let left = 2 * j + 1;
  let right = 2 * j + 2;
  let max = j;
  if (left < len && array[left] > array[max]) {
    max = left;
  }

  if (right < len && array[right] > array[max]) {
    max = right;
  }

  if (max != j) {
    swap(array, max, j)
    heapify(array, max, len);
  }
}

function swap (array, max, j) {
  [array[max], array[j]] = [array[j], array[max]];
}

module.exports = heapSort;