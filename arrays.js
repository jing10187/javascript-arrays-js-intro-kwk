var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

//Add Element to Beginning

function addElementToBeginningOfArray(array, element){
  var array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

// Add Element to End
function addElementToEndOfArray(array, element){
  var array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

//accessElementInArray
function accessElementInArray(array, index) {
  return array[index];
}

//remove Element
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(); return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1); return array=array.slice(1)
}

function removeElementFromEndOfArray(array) {
  array.pop(); return array
}
