# javascript-highorder-functions

forEach

arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

filter

var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

map

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

sort

arr.sort([compareFunction])

reduce

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
