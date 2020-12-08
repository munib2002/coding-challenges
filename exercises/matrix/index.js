// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     let grid = [];
//     for (let i = 0; i < n; i++) {
//         grid.push(new Array(n).fill('*'));
//     }

//     let pos = [0, 0];
//     let d = 1;
//     let directions = [-1, 1, 1, -1];

//     for (let i = 1; i <= n * n; i++) {
//         let [x, y] = pos;
//         let cur = (d + 1) % 2;
//         grid[y][x] = i;
        
//         let _pos = [...pos];

//         _pos[cur] += directions[d];

//         if (_pos[1] < 0 || _pos[1] >= n || grid[_pos[1]][_pos[0]] != '*') d++;
//         while (d >= 4) d -= 4;

//         cur = (d + 1) % 2;
//         pos[cur] += directions[d];
//     }
//     return grid;
// }

function matrix(n) {
    const grid = [], route = [], directions = [-1, 1, 1, -1];
    let step = 0, d = 1, pos = [0, 0];

    for (let i = 0, z = 0; i < n; i++) {
        grid.push([]);
        for (let k = 0; k < (i ? 2 : 1); k++) {
            z += n - i;
            route.push(z);
        }
    }

    for (let i = 1; i <= n * n; i++) {
        grid[pos[1]][pos[0]] = i;

        if (route[step] === i) {
            d++;
            step++;
            while (d >= 4) d -= 4;
        }
        
        pos[(d + 1) % 2] += directions[d];
    }

    return grid;
}


module.exports = matrix;
