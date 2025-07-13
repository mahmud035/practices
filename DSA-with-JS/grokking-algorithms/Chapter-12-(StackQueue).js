class Stack {
  constructor(array) {
    this.array = array || [];
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  // O(1)
  push(value) {
    this.array.push(value);
  }

  // O(1)
  pop() {
    return this.array.pop();
  }

  // O(1)
  peek() {
    return this.array.at(-1);
  }
}

// Instance of the stack class
const stack1 = new Stack();

console.log(stack1); // Stack { array: [] }

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log(stack1.peek()); // 30

// stack1.pop();
// stack1.pop();

// ==================================================

// Access: To access the nth node from the top, you need to call pop n number of times.

// O(n)
function stackAccessNthTopNode(stack, n) {
  const bufferArray = stack.getBuffer();
  if (n <= 0) throw new Error('Error');

  const bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }
  return bufferStack.pop();
}

const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stackAccessNthTopNode(stack2, 2)); // 2

// Search: Searching the stack data structure for a specific element is a critical operation. To do this, you must first create a buffer stack so that pop can be called on that buffer stack. This way, the original stack is not mutated, and nothing is removed from it.

// O(n)
function stackSearch(stack, element) {
  const bufferArray = stack.getBuffer();

  const bufferStack = new Stack(bufferArray); // copy into buffer

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === element) return true;
  }
  return false;
}

// ==================================================

// Queues: A queue is also a data structure, but you can remove only the first added element. This is a principle known as first in, first out (FIFO).

/*
  In JavaScript, arrays have methods that define the queue class: `shift()` and `push()`. Recall that the `shift()` method on an array in JavaScript removes and returns the first element of the array. Adding to a queue is commonly known as `enqueuing`, and removing from a queue is known as `dequeuing`. `shift()` can be used for the `dequeue`, and `.push()` can be used for the enqueue.
*/

class Queue {
  constructor(array) {
    this.array = array || [];
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  // O(1)
  enqueue(value) {
    this.array.push(value);
  }

  // O(n)
  dequeue() {
    return this.array.shift();
  }

  peek() {
    return this.array.at(0);
  }
}

// Instance of the queue class
const queue1 = new Queue();

console.log(queue1); // Queue { array: [] }

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);

console.log(queue1); // {array: [10, 20, 30]}

queue1.dequeue();
console.log(queue1); // {array: [20, 30]}

queue1.dequeue();
console.log(queue1); // {array: [30]}

// ==================================================

// Access: To access the nth last-added node, you need to call dequeue n number of times. A buffer is needed to prevent modification to the original queue.

// O(n)
function queueAccessNthTopNode(queue, n) {
  const bufferArray = queue.getBuffer();
  if (n <= 0) throw new Error('Error');

  const bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferArray.dequeue();
}

// Search: You might need to search a queue to check whether an element exists within a queue. Again, this involves creating a buffer queue first to avoid modifications to the original queue.

// O(n)
function queueSearch(queue, element) {
  const bufferArray = queue.bufferArray();
  const bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() === element) return true;
  }
  return false;
}

//* ------- Exercise Solutions -------

// DESIGN A STACK USING ONLY QUEUES AND THEN DESIGN A QUEUE USING ONLY STACKS

// Stack Using Queues (Not Completed Yet)

class TwoStackQueue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    this.inbox.push(value);
  }

  dequeue() {
    if (this.outbox.isEmpty()) {
      while (!this.inbox.isEmpty()) {
        this.outbox.push(this.inbox.pop());
      }
    }

    return this.outbox.pop();
  }
}

// DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND HANDLES FOOD ORDERING ON A FIRST-COME, FIRST-SERVED BASIS

/*
  Here are the requirements:
    1. The cashier requires a customer name and order item for the order.
    2. The customer who was served first is processed first.
  Here are the required implementations:
    • addOrder(customer): Enqueues a customer object to be processed by
    deliverOrder()
    • deliverOrder(): Prints the name and order for the next customer to be
    processed
*/

class Customer {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }
}

class Cashier {
  constructor() {
    this.customers = new Queue();
  }

  addOrder(customer) {
    this.customers.enqueue(customer);
  }

  deliverOrder() {
    const finishedCustomer = this.customers.dequeue();
    console.log(
      `${finishedCustomer.name} your ${finishedCustomer.order} is ready`
    );
  }
}

const cashier = new Cashier();
const customer1 = new Customer('Jim', 'Fries');
const customer2 = new Customer('Sammie', 'Burger');
const customer3 = new Customer('Peter', 'Drink');

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder(); // Jim, your Fries is ready!
cashier.deliverOrder(); // Sammie, your Burger is ready!
cashier.deliverOrder(); // Peter, your Drink is ready!

// DESIGN A PARENTHESIS VALIDATION CHECKER USING A STACK

// ((())) is a valid parentheses set, while ((() and ))) are not. A stack can be used to check the validity of parentheses by storing the left parenthesis and using push and triggering pop when the right parenthesis is seen.

// If there is anything left in the stack afterward, it is not a valid parentheses set. Also, it is not a valid parentheses set if more right parentheses are seen than left ones. Using these rules, use a stack to store the most recent parenthesis.

function isParenthesisValid(validationString) {
  const stack = new Stack();

  for (let pos = 0; pos < validationString.length; pos++) {
    const currentChar = validationString.charAt(pos);

    if (currentChar === '(') stack.push(currentChar);
    else if (currentChar === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}

console.log(isParenthesisValid('((()')); // false
console.log(isParenthesisValid('((((')); // false
console.log(isParenthesisValid('()()')); // true
