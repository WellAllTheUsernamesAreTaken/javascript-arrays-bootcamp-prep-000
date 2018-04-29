var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var a = array;
  a = a.unshift(element);
  return a //array.unshift(element);
}
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}


function accessElementInArray(array, index) {
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  var a = array;
  a = a.slice(1);
  return a //array.slice(1);
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.shift(1);
}
function removeElementFromEndOfArray(array) {
  return array.shift(1);
}