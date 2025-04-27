import LinkedList from './linkedListWithTail.js';

class LinkedListStack {
  constructor() {
    this.list = new LinkedList(); // Initialize an empty linked list
  }

  isEmpty() {
    return this.list.isEmpty(); // Check if the linked list is empty
  }

  getSize() {
    return this.list.getSize(); // Get the size of the linked list
  }

  push(value) {
    this.list.prepend(value); // Add a new value to the front of the linked list
  }

  pop() {
    return this.list.removeFromFront(); // Remove the value from the front of the linked list
  }

  peek() {
    return this.isEmpty() ? null : this.list.head.value; // Return the value of the head node without removing it
  }

  print() {
    this.list.print(); // Print the linked list
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty()); // true

stack.push(1); // Push 1 into the stack
stack.push(2); // Push 2 into the stack
stack.push(3); // Push 3 into the stack

console.log(stack);
stack.print();

stack.peek(); // Peek at the top value (3) without removing it
console.log(stack.getSize()); // 3

stack.pop(); // Pop the top value (3) from the stack
stack.pop(); // Pop the top value (2) from the stack

console.log(stack.getSize()); // 1

console.log(stack);
