var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(Array, e1) {
  return `${Array.unshift("${e1}")}`
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