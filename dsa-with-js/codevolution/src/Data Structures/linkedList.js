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
