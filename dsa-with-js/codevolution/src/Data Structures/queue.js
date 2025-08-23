class QueueCl {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add an item to the end of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Dequeue: Remove an item from the front of the queue
  dequeue() {
    if (this.isEmpty()) return 'Queue is empty';
    return this.items.shift();
  }

  // isEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Peek: Get the first item in the queue without removing it
  peek() {
    if (this.isEmpty()) return 'Queue is empty';
    return this.items.at(0);
  }

  // Size: Get the size of the queue
  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(' '));
  }
}

const queue = new QueueCl();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // 10 20 30

console.log(queue.size()); // 3
console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10

queue.print(); // 20 30
