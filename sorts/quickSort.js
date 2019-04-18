// complexity best, average nlogn, worst n^2
// memory logn

function quickSort(array) {
  if (array.length <= 1) return array;
  let random = Math.floor(Math.random()*array.length);
  let pivot = array[random];
  let leftSide = [];
  let rightSide = [];
  let pivots = [];
  for (let i=0; i<array.length; i++) {
    if(array[i] < pivot) {
      leftSide.push(array[i]);
    } else if (array[i] > pivot) {
      rightSide.push(array[i]);
    } else {
      pivots.push(array[i]);
    }
  }

  return [...quickSort(leftSide), ...pivots, ...quickSort(rightSide)]
}

module.exports = quickSort;

