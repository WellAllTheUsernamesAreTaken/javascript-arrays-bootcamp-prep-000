var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(yourArray, element) {
  myArray = new Array();
  myArray = yourArray;
  return myArray.unshift(element)
}
function destructivelyAddElementToBeginningOfArray() {
  chocolateBars = ["Hersey", ...chocolateBars]
}
function addElementToEndOfArray() {
  chocolateBars.push("Hersey")
}
function destructivelyAddElementToEndOfArray() {
  chocolateBars = [...chocolateBars, "Hersey"]
}


function accessElementInArray() {
  
}


function destructivelyRemoveElementFromBeginningOfArray() {
  
}
function removeElementFromBeginningOfArray() {
  
}
function destructivelyRemoveElementFromEndOfArray() {
  
}
function removeElementFromEndOfArray() {
  
}