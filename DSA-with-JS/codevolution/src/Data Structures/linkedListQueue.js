import LinkedList from './linkedListWithTail.js';

// Queue => FIFO (First In First Out)
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList(); // Initialize an empty linked list
  }

  isEmpty() {
    return this.list.isEmpty(); // Check if the linked list is empty
  }

  getSize() {
    return this.list.getSize(); // Get the size of the linked list
  }

  enqueue(value) {
    this.list.append(value); // Add a new value to the end of the linked list
  }

  dequeue() {
    return this.list.removeFromFront(); // Remove the value from the front of the linked list
  }

  peek() {
    return this.isEmpty() ? null : this.list.head.value; // Return the value of the head node without removing it
  }

  print() {
    this.list.print(); // Print the linked list
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty()); // true

queue.enqueue(1); // Enqueue 1 into the queue
queue.enqueue(2); // Enqueue 2 into the queue
queue.enqueue(3); // Enqueue 3 into the queue

console.log(queue);
queue.print(); // 1 2 3

queue.peek(); // Peek at the front value (1) without removing it
console.log(queue.getSize()); // 3

queue.dequeue(); // Dequeue the front value (1) from the queue
queue.dequeue(); // Dequeue the front value (2) from the queue

console.log(queue.getSize()); // 1
console.log(queue);
queue.print(); // 3
