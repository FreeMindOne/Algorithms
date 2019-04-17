function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i; 
    for (let j=i; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    [array[min], array[i]] = [array[i], array[min]];
  }
  
  return array;
}

module.exports = selectionSort;