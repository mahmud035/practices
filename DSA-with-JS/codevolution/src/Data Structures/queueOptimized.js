class QueueOptimizedCl {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
      this.items = {}; // Reset the items object to free up memory
    }
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queueOptimized = new QueueOptimizedCl();
console.log(queueOptimized.isEmpty()); // true

queueOptimized.enqueue(10);
queueOptimized.enqueue(20);
queueOptimized.enqueue(30);

queueOptimized.print(); // { '0': 10, '1': 20, '2': 30 }

queueOptimized.dequeue(); // 10
queueOptimized.print(); // { '1': 20, '2': 30 }
queueOptimized.size(); // 2
