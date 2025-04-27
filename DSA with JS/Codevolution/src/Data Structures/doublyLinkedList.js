class Node {
  constructor(data) {
    this.data = data; // The data stored in the node
    this.next = null; // Pointer to the next node in the list
    this.prev = null; // Pointer to the previous node in the list
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.tail = null; // Pointer to the last node in the list
    this.size = 0; // Size of the list (number of nodes)
  }

  isEmpty() {
    return this.size === 0; // Check if the list is empty
  }

  getSize() {
    return this.size; // Return the size of the list
  }

  // O(1)
  addAtFront(data) {
    const newNode = new Node(data);

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
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // O(1)
  deleteAtHead() {
    if (this.isEmpty()) {
      console.log('List is empty, nothing to delete');
      return null;
    }

    const deletedNode = this.head; // Store the current head node to return later

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
    return deletedNode.data; // Return the data of the deleted node
  }

  // O(1)
  deleteAtTail() {
    if (this.isEmpty()) {
      console.log('List is empty, nothing to delete');
      return null;
    }

    const deletedNode = this.tail; // Store the current tail node to return later

    // Case 1: If the list has only one node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null; // Set both head and tail to null
    }

    // Case 2: If the list has more than one node
    else {
      this.tail = this.tail.prev; // Move tail pointer to the previous node
      this.tail.next = null;
    }

    this.size--;
    return deletedNode.data; // Return the data of the deleted node
  }

  // O(n)
  findStartingHead(value) {
    let currentHead = this.head;
    while (currentHead.next) {
      if (currentHead.data === value) return true;
      currentHead = currentHead.next;
    }
    return false;
  }

  // O(n)
  findStartingTail(value) {
    let currentTail = this.tail;
    while (currentTail.prev) {
      if (currentTail.data === value) return true;
      currentTail = currentTail.prev;
    }
    return false;
  }

  print() {
    let currentNode = this.head;
    const results = [];

    while (currentNode) {
      results.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(results.join(' <-> '));
  }
}

const list = new DoublyLinkedList();
console.log(list.isEmpty()); // true

list.addAtFront(10); // Add 10 at the front of the list
list.addAtFront(20); // Add 20 at the front of the list
list.addAtFront(30); // Add 30 at the front of the list
list.print(); // Print the list (30 <-> 20 <-> 10)

list.insertAtTail(40); // Add 40 at the tail of the list
list.insertAtTail(50); // Add 50 at the tail of the list
list.insertAtTail(60); // Add 60 at the tail of the list
list.print(); // Print the list (30 <-> 20 <-> 10 <-> 40 <-> 50 <-> 60)

console.log(list.deleteAtHead()); // Delete the head node (30)
console.log(list.deleteAtHead()); // Delete the head node (20)
list.print(); // Print the list (10 <-> 40 <-> 50 <-> 60)

console.log(list.deleteAtTail()); // Delete the tail node (60)
list.print(); // Print the list (10 <-> 40 <-> 50)

console.log(list.findStartingHead(10)); // true
console.log(list.findStartingHead(400)); // false

console.log(list.findStartingTail(40)); // true
console.log(list.findStartingTail(700)); // false

console.log(list);
