class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
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

  // O(n)
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

// Create an instance of LinkedList and test the methods
// const list = new LinkedList();

// console.log(`List is empty? ${list.isEmpty()}`); // list is empty? true
// console.log(`List size: ${list.getSize()}`); // List size: 0
// list.print();

// list.prepend(10);
// list.print(); // 10

// list.prepend(20);
// list.prepend(30);
// list.print(); // 30 20 10

// list.append(40);
// list.append(50);
// list.print(); // 30 20 10 40 50

// list.removeFromFront();
// list.print(); // 20 10 40 50

// list.removeFromEnd();
// list.print(); // 20 10 40

// console.log(list);

export default LinkedList;
