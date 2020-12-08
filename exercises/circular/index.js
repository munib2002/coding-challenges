// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    for (let slow = list.head, fast = list.head; ; slow = slow.next) {
		if (!fast?.next?.next) return false;
        fast = fast.next.next;
        if (slow === fast) return true;
	}
}

module.exports = circular;
