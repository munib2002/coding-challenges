// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		const next = data < this.data ? 'left' : 'right';
		if (this[next]) return this[next].insert(data);
		this[next] = new Node(data);
    }
    
    contains(data) {
        const next = data < this.data ? 'left' : 'right';
        if (data === this.data) return this;
        return this[next] ? this[next].contains(data) : null;
    }
}

module.exports = Node;


/****
 * 
 * 
 * 
 * 
 * 
 * 
 */