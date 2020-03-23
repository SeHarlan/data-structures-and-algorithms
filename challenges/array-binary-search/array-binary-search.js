function binarySearch(array, value) {
  //return index of the value in index or -1 if it doesnt exist
  let returnValue = -1
  for(let i = 0; i < array.length; i++) {
    if (array[i] === value) returnValue = i;
  }
  return returnValue
}


module.exports = { binarySearch }