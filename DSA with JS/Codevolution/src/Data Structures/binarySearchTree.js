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

  // O(log n) (for balanced tree)
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      let currentRoot = this.root;

      while (true) {
        if (value < currentRoot.value) {
          // Go left
          if (currentRoot.left === null) {
            currentRoot.left = newNode;
            break;
          } else {
            currentRoot = currentRoot.left;
          }
        } else if (value > currentRoot.value) {
          // Go right
          if (currentRoot.right === null) {
            currentRoot.right = newNode;
            break;
          } else {
            currentRoot = currentRoot.right;
          }
        } else break; // Duplicate values are not allowed
      }
    }
  }

  // O(log n) (for balanced tree)
  findNode(value) {
    let currentRoot = this.root;
    let found = false;

    while (currentRoot) {
      if (value < currentRoot.value) currentRoot = currentRoot.left;
      if (value > currentRoot.value) currentRoot = currentRoot.right;
      else {
        found = true; // we've found the node
        break;
      }
    }
    return found;
  }

  // Depth First Search (DFS)
  // Pre-order traversal (Root -> Left -> Right)
  traversePreOrder() {
    const currentRoot = this.root;

    function traversePreOrderHelper(node) {
      if (!node) return;
      console.log('Pre-order Traversal', node.value);
      traversePreOrderHelper(node.left);
      traversePreOrderHelper(node.right);
    }

    traversePreOrderHelper(currentRoot);
  }

  // In-order traversal (Left -> Root -> Right)
  traverseInOrder() {
    const currentRoot = this.root;

    function traverseInOrderHelper(node) {
      if (!node) return;
      traverseInOrderHelper(node.left);
      console.log('In-order Traversal', node.value);
      traverseInOrderHelper(node.right);
    }

    traverseInOrderHelper(currentRoot);
  }

  // Post-order traversal (Left -> Right -> Root)
  traversePostOrder() {
    const currentRoot = this.root;

    function traversePostOrderHelper(node) {
      if (node.left) traversePostOrderHelper(node.left);
      if (node.right) traversePostOrderHelper(node.right);
      console.log('Post-order Traversal', node.value);
    }

    traversePostOrderHelper(currentRoot);
  }

  // Level-order traversal (Breadth-first search)

  removeNode(value) {}
}

const bst = new BinarySearchTree();
console.log(`Tree is empty: ${bst.isEmpty()}`); // true

bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(17);
bst.insert(13);
bst.insert(20);
bst.insert(6);
bst.insert(30);

console.log(bst.findNode(13)); // true
console.log(bst.findNode(40)); // false

bst.traversePreOrder();
bst.traverseInOrder();
bst.traversePostOrder();

console.log(bst);
