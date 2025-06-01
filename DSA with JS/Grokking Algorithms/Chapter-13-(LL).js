class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node
    this.size = 0; // Size of the linked list
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head to new node
    if (this.isEmpty()) {
      this.head = newNode;
    }

    // Case 2: If the list is not empty, link new node to the current head and update head to the new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // O(n)
  append(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head to new node
    if (this.isEmpty()) {
      this.head = newNode;
    }

    // Case 2: If the list is not empty, traverse to the end and link the last node to the new node
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next; // Move to the next node
      }
      currentNode.next = newNode; // Link last node to new node
    }

    this.size++;
  }

  // O(n)
  insert(value, index) {
    if (index < 0 || index > this.size) return 'Invalid index';
    if (index === 0) return this.prepend(value); // Insert at head

    const newNode = new Node(value);
    let prevNode = this.head; // Start from head

    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }

    newNode.next = prevNode.next; // First set new node's next
    prevNode.next = newNode; // Then update previous node's next
    this.size++;
  }

  // O(n)
  removeFrom(index) {
    if (index < 0 || index >= this.size) return 'Invalid index';

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prevNode = this.head; // Start from node

      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }

      removeNode = prevNode.next;
      prevNode.next = removeNode.next; // Link previous node to the next node of the node to be removed
    }

    this.size--;
    return removeNode.value;
  }

  // O(n)
  removeValue(value) {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let prevNode = this.head; // Start from head
    while (prevNode.next !== null && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next === null) {
      console.log('Value not found in the list');
      return;
    }

    const removeNode = prevNode.next;
    prevNode.next = removeNode.next; // Link previous node to the next node of the node to be removed
    this.size--;
    return removeNode.value;
  }

  // O(n)
  find(value) {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    let currentNode = this.head; // Start from head
    while (currentNode.next !== null) {
      if (currentNode.value === value) return currentNode.value;
      currentNode = currentNode.next;
    }

    console.log('Value not found in the list');
    return null;
  }

  // 0(n)
  reverse() {
    let prev = null; // Tracks the previous node
    let current = this.head; // Start with the head node
    let next = null; // Will store the next node temporarily

    while (current !== null) {
      next = current.next; // Save the next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev forward
      current = next; // Move current forward
    }

    this.head = prev; // Update head to the new first node
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
      return;
    }

    let currentNode = this.head;
    let listValues = '';

    while (currentNode) {
      listValues += ` ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    console.log(listValues.trim());
  }
}

// Create an instance of LinkedList and test the methods
const list = new LinkedList();

console.log(`List is empty? ${list.isEmpty()}`); // List is empty? true
console.log(`List size: ${list.getSize()}`); // List size: 0

list.prepend(10);
list.print(); // 10

list.prepend(20);
list.prepend(30);
list.print(); // 30 20 10

list.append(40);
list.append(50);
list.print(); // 30 20 10 40 50

console.log(list.insert(5, -10)); // Invalid index
list.insert(5, 0);
list.print(); // 5 30 20 10 40 50

list.insert(7, 2);
list.print(); // 5 30 7 20 10 40 50

list.insert(15, 5);
list.print(); // 5 30 7 20 10 15 40 50

console.log(list.removeFrom(8)); // Invalid index

list.removeFrom(0);
list.print(); // 30 7 20 10 15 40 50

list.removeFrom(2);
list.print(); // 30 7 10 15 40 50

list.removeFrom(4);
list.print(); // 30 7 10 15 50

list.removeValue(10);
list.print(); // 30 7 15 50

list.removeValue(15);
list.print(); // 30 7 50

console.log(list.find(7)); // 7
list.find(200); // Value not found in the list

list.reverse();
list.print(); // Reversed list: 50 7 30
list.reverse();
list.print(); // 30 7 50 (Reversed back to original)

console.log(list);

// ==================================================
console.log('----------- Linked list with tail -----------');

class LinkedListWithTail {
  constructor() {
    this.head = null; // Pointer to the first node
    this.tail = null; // Pointer to the last node
    this.size = 0; // Size of the linked list
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  // O(1)
  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head and tail to the new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }

    // Case 2: If the list is not empty, link new node to current head and update head to new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head and tail to new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }

    // Case 2: If the list is not empty, link last node to new node and update tail to new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      console.log('List is empty. Noting to remove');
      return;
    }

    const removeValue = this.head.value; // Store the value of the head node

    // Case 1: If the list has only one node, set head and tail to null
    if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null;
    }

    // Case 2: If the list has more than one node, update head to the next node
    else {
      this.head = this.head.next;
    }

    this.size--;
    return removeValue;
  }

  // O(n)
  removeFromEnd() {
    if (this.isEmpty()) {
      console.log('List is empty. Noting to remove');
      return;
    }

    const removeValue = this.tail.value; // Store the value of the tail node

    // Case 1: If the list has only one node, set head and tail to null
    if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null;
    }

    // Case 2: If the list has more than one node, traverse to the second last node and update tail as second last node
    else {
      let currentNode = this.head; // Start from head

      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode; // Update tail to the second last node
    }

    this.size--;
    return removeValue; // Return the removed value
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    let currentNode = this.head; // Start from head
    let listValues = '';

    while (currentNode) {
      listValues += ` ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    console.log(listValues.trim());
  }
}

// Create an instance of LinkedListWithTail and test the methods
const tailList = new LinkedListWithTail();

console.log(`List is empty? ${tailList.isEmpty()}`); // List is empty? true
console.log(`List size: ${tailList.getSize()}`); // List size: 0

tailList.prepend(10);
tailList.print(); // 10

tailList.prepend(20);
tailList.prepend(30);
tailList.print(); // 30 20 10

tailList.append(40);
tailList.append(50);
tailList.print(); // 30 20 10 40 50

console.log(tailList.removeFromFront()); // 30
tailList.print(); // 20 10 40 50

console.log(tailList.removeFromEnd()); // 50
tailList.print(); // 20 10 40

console.log(tailList.removeFromEnd()); // 40
tailList.print(); // 20 10

console.log(tailList.removeFromFront()); // 20
tailList.print(); // 10

console.log(tailList.removeFromFront()); // 10
tailList.print(); // List is empty

console.log(tailList.removeFromFront()); // List is empty. Nothing to remove
console.log(tailList.removeFromEnd()); // List is empty. Nothing to remove

console.log(`List is empty? ${tailList.isEmpty()}`); // true
console.log(`List size: ${tailList.getSize()}`); // 0

// ==================================================
console.log('----------- Doubly LinkedList -----------');
class DoublyLinkedListNode {
  constructor(data) {
    this.data = data; // The data store in the node
    this.next = null; // Pointer to the next node in the list
    this.prev = null; // Pointer to the previous node int the list
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.tail = null; // Pointer to the last node in the list
    this.size = 0; // Size of the list (Number of nodes)
  }

  // O(1)
  isEmpty() {
    return this.size === 0; // Check if the list is empty
  }

  // O(1)
  getSize() {
    return this.size; // Return the size of the list
  }

  // O(1)
  addAtFront(data) {
    const newNode = new DoublyLinkedListNode(data);

    if (this.isEmpty()) {
      this.head = newNode; // If the list is empty, set head to the new node
      this.tail = newNode; // Set tail to the new node as well
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode; // Set the new node as the head of the list
    }

    this.size++;
  }

  // O(1)
  insertAtTail(data) {
    const newNode = new DoublyLinkedListNode(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  // O(1)
  deleteAtHead() {
    if (this.isEmpty()) {
      console.log('List is empty. Nothing to delete');
      return null;
    }

    const deleteNode = this.head; // Store the current head node to return later

    // Case 1: If the list has only one node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null; // Set both head and tail to null
    }

    // Case 2: If the list has more than one node
    else {
      this.head = this.head.next; // Move head pointer to the next node
      this.head.prev = null;
    }

    this.size--;
    return deleteNode.data; // Return the data of the delete node
  }

  // O(1)
  deleteAtTail() {
    if (this.isEmpty()) {
      console.log('List is empty. Nothing to delete');
      return null;
    }

    const deleteNode = this.tail; // Store the current tail node to return later

    // Case 1: If the list has only one node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    // Case 2: If the list has more than one node
    else {
      this.tail = this.tail.prev; // Move tail pointer to the previous node
      this.tail.next = null;
    }

    this.size--;
    return deleteNode.data; // Return the data of the deleted node
  }

  // O(n)
  findStartingHead(data) {
    let currentHead = this.head;
    while (currentHead.next) {
      if (currentHead.data === data) return true;
      currentHead = currentHead.next;
    }
    return false;
  }

  // O(n)
  findStartingTail(data) {
    let currentTail = this.tail;
    while (currentTail.prev) {
      if (currentTail.data === data) return true;
      currentTail = currentTail.prev;
    }
    return false;
  }

  // O(n)
  print() {
    let currentNode = this.head;
    const result = [];

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(result.join(' <-> '));
  }
}

// Create an instance of DoublyLinkedList and test the methods
const doublyList = new DoublyLinkedList();
console.log(doublyList.isEmpty()); // true

doublyList.addAtFront(10);
doublyList.addAtFront(20);
doublyList.addAtFront(30);
doublyList.print(); // 30 <-> 20 <-> 10

doublyList.insertAtTail(40);
doublyList.insertAtTail(50);
doublyList.insertAtTail(60);
doublyList.print(); // 30 <-> 20 <-> 10 <-> 40 <-> 50 <-> 60

console.log(doublyList.deleteAtHead());
console.log(doublyList.deleteAtHead());
doublyList.print(); // 10 <-> 40 <-> 50 <-> 60

console.log(doublyList.deleteAtTail());
doublyList.print(); // 10 <-> 40 <-> 50

console.log(doublyList.findStartingHead(10)); // true
console.log(doublyList.findStartingHead(40)); // true
console.log(doublyList.findStartingHead(400)); // false

console.log(doublyList.findStartingTail(40)); // true
console.log(doublyList.findStartingTail(700)); // false

// ==================================================
console.log('--- Implement Queue Data Structure using LinkedList ---');

class LinkedListWithTailForQueueAndStack {
  constructor() {
    this.head = null; // Pointer to the first node
    this.tail = null; // Pointer to the last node
    this.size = 0; // Size of the linked list
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  // O(1)
  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head and tail to the new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }

    // Case 2: If the list is not empty, link new node to current head and update head to new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head and tail to new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }

    // Case 2: If the list is not empty, link last node to new node and update tail to new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      console.log('List is empty. Noting to remove');
      return;
    }

    const removeValue = this.head.value; // Store the value of the head node

    // Case 1: If the list has only one node, set head and tail to null
    if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null;
    }

    // Case 2: If the list has more than one node, update head to the next node
    else {
      this.head = this.head.next;
    }

    this.size--;
    return removeValue;
  }

  // O(n)
  removeFromEnd() {
    if (this.isEmpty()) {
      console.log('List is empty. Noting to remove');
      return;
    }

    const removeValue = this.tail.value; // Store the value of the tail node

    // Case 1: If the list has only one node, set head and tail to null
    if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null;
    }

    // Case 2: If the list has more than one node, traverse to the second last node and update tail as second last node
    else {
      let currentNode = this.head; // Start from head

      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode; // Update tail to the second last node
    }

    this.size--;
    return removeValue; // Return the removed value
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    let currentNode = this.head; // Start from head
    let listValues = '';

    while (currentNode) {
      listValues += ` ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    console.log(listValues.trim());
  }
}

// Queue => FIFO (First In First Out)
class LinkedListQueue {
  constructor() {
    this.list = new LinkedListWithTailForQueueAndStack(); // Initialize an empty linked list
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

// Create an instance of LinkedListQueue and test the methods
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

// ==================================================
console.log('--- Implement Stack Data Structure using LinkedList ---');

// Stack => LIFO (Last In First Out)
class LinkedListStack {
  constructor() {
    this.list = new LinkedListWithTailForQueueAndStack(); // Initialize an empty linked list
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

// Create an instance of LinkedListStack and test the methods
const stack = new LinkedListStack();
console.log(stack.isEmpty()); // true

stack.push(1); // Push 1 into the stack
stack.push(2); // Push 2 into the stack
stack.push(3); // Push 3 into the stack

console.log(stack);
stack.print(); // 3 2 1

stack.peek(); // Peek at the top value (3) without removing it
console.log(stack.getSize()); // 3

stack.pop(); // Pop the top value (3) from the stack
stack.pop(); // Pop the top value (2) from the stack

console.log(stack.getSize()); // 1

console.log(stack);
stack.print(); // 1
