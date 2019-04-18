// complexity n^2
// memory constant

function bubleSort(array) {
  for(let i = 0;i < array.length-1;i++) {
    for(let j = 0;j <array.length-1;j++) {
      if(array[j+1]<array[j]) {
        [array[j+1], array[j]] = [array[j], array[j+1]];
      }
    }
  }

  return array;
}

module.exports = bubleSort;