var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(`${element}`);
}
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(`${element}`);
}


function accessElementInArray(array, index) {
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.slice(-2);
}
function removeElementFromBeginningOfArray(array) {
  var a = array.slice(1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.shift(-2);
}
function removeElementFromEndOfArray(array) {
  var a = array.shift(1);
  return a;
}