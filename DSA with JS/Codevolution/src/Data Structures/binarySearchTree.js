class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // left child
    this.right = null; // right child
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // root of the tree
  }

  isEmpty() {
    return this.root === null;
  }
}

const bst = new BinarySearchTree();
console.log(`Tree is empty: ${bst.isEmpty()}`); // true
