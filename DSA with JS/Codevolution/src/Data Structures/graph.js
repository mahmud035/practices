{
  const adjacencyMatrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ];

  // console.log(adjacencyMatrix);
  // console.log(adjacencyMatrix[0]);
  // console.log(adjacencyMatrix[1]);
  // console.log(adjacencyMatrix[2]);

  // console.log(adjacencyMatrix[0][2]);
  // console.log(adjacencyMatrix[2][1]);
}

{
  const adjacencyList = {
    A: ['B'],
    B: ['A', 'C'],
    C: ['B'],
  };

  // console.log(adjacencyList['A']);
  // console.log(adjacencyList['B']);
  // console.log(adjacencyList['C']);
}

//* Implementation using Adjacency List
class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new UndirectedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.display();

console.log(graph.hasEdge('A', 'B')); // true
console.log(graph.hasEdge('A', 'C')); // false

// graph.removeEdge('A', 'B');
// graph.display();

graph.removeVertex('B');
graph.display();
