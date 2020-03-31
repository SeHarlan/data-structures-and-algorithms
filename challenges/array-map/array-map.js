function map(arr, func) {
    //create new array to be returned
    const newArray = [];
    //itterate through each item in the origional array
    for(let i = 0; i < arr.length; i++) {
        //apply the callback and assign the result to the new array
        newArray[i] = func(arr[i])
    }
    return newArray
}
module.exports = {
    map
}
