// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');


    // const arr = str.split('');
    // let reverseArr = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     reverseArr.push(arr[i]);
    // }
    // return reverseArr.join('');

    return str.split('').reduce((a, c) => c + a, ''); 
}

module.exports = reverse;
