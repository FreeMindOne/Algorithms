const assert = require('assert');
const quickSort = require('../sorts/quickSort');
const insertionSort = require('../sorts/insertionSort');
const selectionSort = require('../sorts/selectionSort');
const mergeSort = require('../sorts/mergeSort');
const bucketSort = require('../sorts/bucketSort');
const bubbleSort = require('../sorts/bubbleSort');
const heapSort = require('../sorts/heapSort');

let randomArray = [...new Array(15)].map(element => Math.floor(Math.random()*100));
console.log(randomArray);

const testCases = [
  [7, 6, 5, 4, 3, 2, 1],
  [0, 1, 2, 3, 4, 5, 6],
  [-17, 8, 3, 9, 15, 4, 21, 6],
  [-1, -2, -3, -4, -5, -6, -7],
  [...randomArray],
];

const sortingFunctions = [insertionSort, selectionSort, mergeSort, quickSort, bucketSort, bubbleSort, heapSort];

sortingFunctions.forEach(sortFunc => {
  describe(`sorting with ${sortFunc.name}`, () => {
    testCases.forEach(testCase => {
      const answer = [...testCase].sort((a,b) => a-b);
      it(`should return ${answer} for ${testCase}`, () => {
        const actual = sortFunc(testCase);
        assert.deepEqual(actual, answer);
      });
    });
  });
});
