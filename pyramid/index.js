// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        let blocks = '#'.repeat(2 * i + 1);
        let side = ' '.repeat(n - i - 1);

        console.log(side + blocks + side);
    }
}

function pyramid2(n, row = 0, str = '') {
    if (row === n) return;

    let side = n - row - 1;
    let totalLength = 2 * n - 1;

    if (str.length === totalLength) {
        console.log(str);
        return pyramid(n, row + 1);
    }
    str += str.length < side || str.length + side >= totalLength ? ' ' : '#';

    pyramid(n, row, str);
}

module.exports = pyramid;
