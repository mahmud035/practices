class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; // left child
    this.right = null; // right child
  }
}

class BinaryTree {
  constructor() {
    this._root = null; // root node
  }

  // Depth First Search (DFS)
  // Pre-order traversal (Root -> Left -> Right)
  traversePreOrder() {
    function traversePreOrderHelper(node) {
      if (!node) return; // base case
      console.log(node.value);
      traversePreOrderHelper(node.left);
      traversePreOrderHelper(node.right);
    }

    traversePreOrderHelper(this._root);
  }

  // In-order traversal (Left -> Root -> Right)
  traverseInOrder() {
    function traverseInOrderHelper(node) {
      if (!node) return; // base case
      traverseInOrderHelper(node.left);
      console.log(node.value);
      traverseInOrderHelper(node.right);
    }

    traverseInOrderHelper(this._root);
  }

  // Post-order traversal (Left -> Right -> Root)
  traversePostOrder() {
    function traversePostOrderHelper(node) {
      if (!node) return; // base case
      traversePostOrderHelper(node.left);
      traversePostOrderHelper(node.right);
      console.log(node.value);
    }

    traversePostOrderHelper(this._root);
  }

  /* 
   Level-order traversal (Breadth First Search: BFS)
   This method essentially visits each node level by level instead of going deep into the left or right.
  */
  traverseLevelOrder() {
    const root = this._root;
    const queue = [];

    if (!root) return;
    queue.push(root); // Start with the root node

    while (queue.length > 0) {
      const node = queue.shift(); // Dequeue the first node
      console.log(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

// ==================================================
console.log('--------- Binary Search Tree ---------');

class BinarySearchTree {
  constructor() {
    this.root = null; // root of the tree
  }

  isEmpty() {
    return this.root === null;
  }

  // O(log n) (for balanced tree)
  insert(value) {
    const newNode = new BinaryTreeNode(value);

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
      else if (value > currentRoot.value) currentRoot = currentRoot.right;
      else {
        found = true; // We've found the node
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
      if (!node) return;
      traversePostOrderHelper(node.left);
      traversePostOrderHelper(node.right);
      console.log('Post-order Traversal', node.value);
    }

    traversePostOrderHelper(currentRoot);
  }

  /* 
   Level-order traversal (Breadth First Search: BFS)
   This method essentially visits each node level by level instead of going deep into the left or right.
  */
  traverseLevelOrder() {
    const root = this.root;
    const queue = [];

    if (!root) return;
    queue.push(root);

    while (queue.length) {
      const current = queue.shift();
      console.log('Breadth First Search', current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

// Instance of a binary search tree
const bst = new BinarySearchTree();
console.log(`Tree is empty: ${bst.isEmpty()}`); // true

// Insert
bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(17);
bst.insert(13);
bst.insert(20);
bst.insert(6);
bst.insert(30);

// Search
console.log(bst.findNode(13)); // true
console.log(bst.findNode(40)); // false

// DFS
bst.traversePreOrder();
bst.traverseInOrder();
bst.traversePostOrder();

// BFS
bst.traverseLevelOrder();

console.log(bst);
