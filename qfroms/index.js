// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor () {
        this.stack = new Stack();
        this.queueFromStack = new Stack();
    }

    add(n) {
        this.stack.push(n);
    }

    remove() {
        this.refillQueue();
        return this.queueFromStack.pop();
    }

    peek() {
        this.refillQueue();
        return this.queueFromStack.peek();
    }

    refillQueue() {
        if (this.queueFromStack.peek() == undefined) while (this.stack.peek() != undefined) this.queueFromStack.push(this.stack.pop());
    }
}

module.exports = Queue;
