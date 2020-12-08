// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		for (let size = 0, curNode = this.head;; size++) {
			if (!curNode) return size;
			curNode = curNode?.next;
		}
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		for (let curNode = this.head;; curNode = curNode.next) {
			if (!curNode.next) return curNode;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head?.next || null;
	}

	removeLast() {
		if (!this.head?.next) return this.removeFirst();

		for (let curNode = this.head, prevNode;; curNode = curNode.next) {
			if (!curNode.next) return (prevNode.next = null);
			prevNode = curNode;
		}
	}

	insertLast(data) {
		if (!this.head) return this.insertFirst(data);

		this.getLast().next = new Node(data);
	}

	getAt(n) {
		for (let curNode = this.head, i = 0;; curNode = curNode.next, i++) {
			if (i === n) return curNode;
			if (!curNode?.next) return null;
		}
	}

	removeAt(n) {
		if (n == 0) return this.removeFirst();

		const prevNode = this.getAt(n - 1);

		if (!prevNode) return;

		prevNode.next = prevNode.next?.next || null;
	}

	insertAt(data, n) {
        if (n == 0 || !this.head) return this.insertFirst(data);
        
		for (let curNode = this.head, i = 0;; curNode = curNode.next, i++) {
			if (i === n - 1 || !curNode.next) return (curNode.next = new Node(data, curNode.next));
		}
	}

    forEach(fn) {
        if (!this.head) return;

        for (let curNode = this.head, i = 0;; curNode = curNode.next, i++) {
            fn(curNode, i);
			if (!curNode.next) break;
		}
    }

    *[Symbol.iterator]() {
        if (!this.head) return;

        for (let curNode = this.head, i = 0;; curNode = curNode.next, i++) {
            yield curNode;
			if (!curNode.next) break;
		}
    } 

}

module.exports = { Node, LinkedList };
