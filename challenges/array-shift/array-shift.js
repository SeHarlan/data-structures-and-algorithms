function insertShiftArray(array, value) {
  //find the middle index
  const midIndex = array.length / 2;

  //****changed strategy
  //recreate the first half of the array
  // recreate the second half with the new value added
  //***** 

  //loop through array with conditional, at mid index insert value and after continute inserting old array values
  const newArray = []
  for (let i = 0; i <= array.length; i++) {
    if (i < midIndex) {
      newArray[i] = array[i]
    } else if (i === midIndex) {
      newArray[midIndex] = value
    } else {
      newArray[i] = array[i - 1]
    }
    // console.log('=================new array', i, newArray)
  }
  // return the new array
  console
  return newArray
}


module.exports = {
  insertShiftArray
}