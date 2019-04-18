// best n avarege, worst n^2
// memory constant

function insertionSort(array) {
  for(let i=1; i < array.length; i++) {
    let j = i;

    while(array[j-1] > array[j] && j>=0 ) {
      [array[j-1], array[j]] = [array[j], array[j-1]];
      j--;
    }
  }

  return array;
}

module.exports = insertionSort;
