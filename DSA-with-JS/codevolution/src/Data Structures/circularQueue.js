class CircularQueueCl {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null; // Clear the dequeued position
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  pick() {
    if (this.isEmpty()) return null;
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) return 'Queue is empty';
    let result = '';
    for (let i = 0; i < this.currentLength; i++) {
      const index = (this.front + i) % this.capacity;
      result += this.items[index] + ' ';
    }
    console.log(result.trim());
  }
}

const circularQueue = new CircularQueueCl(5);
console.log(circularQueue.isEmpty()); // true

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log(circularQueue.isFull()); // true
circularQueue.print(); // 10 20 30 40 50

console.log(circularQueue.dequeue()); // 10
circularQueue.print(); // 20 30 40 50
