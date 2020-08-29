// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < (arr.length - i - 1); k++) {
            if (arr[k] > arr[k + 1]) arr.splice(k + 1, 0, arr.splice(k, 1)[0]);
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[indexOfMin]) indexOfMin = k;
        }
        if (indexOfMin != i) arr.splice(i, 0, arr.splice(indexOfMin, 1)[0]);
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length == 1) return arr;
    return merge(mergeSort(arr.splice(Math.floor(arr.length / 2))), mergeSort(arr));
}

function merge(left, right, result = []) {
    while (left.length && right.length) {
        result.push(right[0] > left[0] ? left.shift() : right.shift());
    }
    return [...result, ...!left.length ? right : left];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
