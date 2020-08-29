//* --- Directions
//* Given an array and chunk size, divide the array into many subarrays
//* where each subarray is of length size
// *--- Examples
// *chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// *chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// *chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// *chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// *chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const arr = [];
    for (let i = 0, length = Math.ceil(array.length / size); i < length; i++) {
        let start = i * size;
        arr.push(array.slice(start, start + size));
    }
    return arr;
}

module.exports = chunk;
