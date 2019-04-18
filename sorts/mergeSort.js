// complexity nlogn
// memory n

function mergeSort(array) {
  if (array.length <= 1) {return array;}

  let middle = Math.floor(array.length/2)
  let leftSide = array.slice(0,middle);
  let rightSide = array.slice(middle);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftArray, rightArray) {
  
  let result=[];
  let i = 0;
  let j = 0;
  
  while( i< leftArray.length && j<rightArray.length ) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++;
    } else {
      result.push(rightArray[j]);
      j++
    }
  }

  let res = [...result, ...leftArray.slice(i), ...rightArray.slice(j)]

  return [...result, ...leftArray.slice(i), ...rightArray.slice(j)];
}

module.exports = mergeSort;