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

  // Depth First Search
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
      if (node.left) traversePostOrderHelper(node.left);
      if (node.right) traversePostOrderHelper(node.right);
      console.log(node.value);
    }

    traversePostOrderHelper(this._root);
  }

  // Level-order traversal (Breadth-first search)
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
