// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node) {
    function traverseDF(n) {
        const children = ['left', 'right'].filter(c => n[c]);
		if (children.every(c => !n[c])) return n.data;
		return children.map(c => traverseDF(n[c])).flat();
    }
    const treeData = traverseDF(node);

    return [...treeData].sort((a, b) => a - b).every((c, i) => treeData[i] == c);
}

// function validate(node, min = null, max = null) {
//     if (!node) return true;
//     if ((max != null && node.data > max) || (min != null && node.data < min)) return false;

//     return validate(node.left, min, node.data) && validate(node.right, node.data, max);
// }

module.exports = validate;
