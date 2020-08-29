// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//     const widths = [1];
//     let width = 0;
//     let counter = 1;
//     const arr = [root];
//     while (arr.length) {
//         const node = arr.shift();
//         width += node.children.length;
//         counter--;
//         if (!counter && width) {
//             counter = width;
//             widths.push(width);
//             width = 0;
//         }
//         arr.push(...node.children);
//     }
//     return widths;
// }

function levelWidth(root) {
    const arr = [root, 's'];
    const widths = [0];

    for (let i = 0; arr.length > 1;) {
        if (arr[0] == 's') {
            arr.push(arr.shift())
            widths[++i] = 0;
        }
        widths[i]++;
        arr.push(...arr.shift().children);
    }
    return widths
}

module.exports = levelWidth;
