var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  const a = array.unshift(`${element}`);
  return a;
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
  const a = array.slice(1);
  return a;
}
function removeElementFromBeginningOfArray(array) {
  const a = array.slice(1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.shift(-2);
}
function removeElementFromEndOfArray(array) {
  var a = array.shift(0);
  return a;
}