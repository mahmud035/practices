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
    // Case 2: If the list is not empty, link new node to the current head and update head to new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  append(value) {
    const newNode = new Node(value);

    // Case 1: If the list is empty, set head to new node
    if (this.isEmpty()) {
      this.head = newNode;
    }
    // Case 2: If the list is not empty, traverse to the end and link the last node to the new node
    else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = newNode; // Link last node to new node
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return 'Invalid index';
    if (index === 0) return this.prepend(value); // Insert at head

    const newNode = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = this.next; // Move to the next node
    }
    prev.next = newNode;
    newNode.next = prev.next;
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return 'Invalid index';

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next; // Link previous node to the next node of the node to be removed
    }
    this.size--;
    return removeNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    let current = this.head;
    let listValues = '';
    while (current !== null) {
      listValues += ` ${current.value}`;
      current = current.next;
    }
    console.log(listValues.trim());
  }
}

// Create an instance of LinkedList and test the methods
const list = new LinkedList();

console.log(`List is empty? ${list.isEmpty()}`); // List is empty? true
console.log(`List size: ${list.getSize()}`); // List size: 0
list.print();

list.prepend(10);
list.print(); // 10

list.prepend(20);
list.prepend(30);
list.print(); // 30 20 10

list.append(40);
list.append(50);
list.print(); // 30 20 10 40 50

console.log(list.removeFrom(2));
list.print(); // 30 20 40 50

console.log(list);
