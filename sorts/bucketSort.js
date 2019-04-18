// true realization of algorithm
// complexity worst n^2, average n+k, best n+k
// memory n+k

const insertionSort = require('./insertionSort')

function bucketSort(array) {
  let amountOfBlocks = Math.ceil(array.length / 3);
  let result = [];
  let blocks = [];
  let max = Math.max(...array)+1;
  let min = Math.min(...array);
  
  for (let i = 0; i < amountOfBlocks; i++) {
    blocks[i] = [];
  }

  for (let j = 0; j < array.length; j++) {
    blocks[Math.floor(amountOfBlocks * (array[j] - min)/(max - min))].push(array[j])
  }

  for (let k = 0; k < blocks.length; k++) {
    result.push(...insertionSort(blocks[k]));
  }

  return result;
}

module.exports = bucketSort;
