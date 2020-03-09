function map(arr, func) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray[i] = func(arr[i])
    }
    return newArray
}
module.exports = {
    map
}
