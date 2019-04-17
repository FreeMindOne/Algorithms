function quickSort(array) {
  if (array.length <= 1) return array;
  let random = Math.floor(Math.random()*array.length);
  let pivot = array[random];
  let leftSide = [];
  let rightSide = [];
  for (let i=0; i<array.length; i++) {
    if(array[i] < pivot) {
      leftSide.push(array[i]);
    } else {
      rightSide.push(array[i]);
    }
  }

  return [].concat(quickSort(leftSide), quickSort(rightSide))
}

module.exports = quickSort;

