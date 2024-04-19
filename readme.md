# Graph Data Structure Implementation

This project provides a simple implementation of a Graph data structure in JavaScript.

## Classes

The project contains two main classes:

1. `Node`: Represents a node in the graph. Each node has a `value` and a set of `adjacent` nodes.

2. `Graph`: Represents a graph. It contains a set of nodes and provides methods for manipulating the graph.

## Methods

The `Graph` class provides the following methods:

- `addVertex(vertex)`: Adds a vertex to the graph.

- `addVertices(vertices)`: Adds multiple vertices to the graph.

- `addEdge(v1, v2)`: Adds an edge between two vertices `v1` and `v2`.

- `removeEdge(v1, v2)`: Removes the edge between two vertices `v1` and `v2`.

- `removeVertex(vertex)`: Removes a vertex and all its edges from the graph.

- `depthFirstSearch(start)`: Performs a depth-first search from the `start` vertex and returns an array of visited nodes.

- `breadthFirstSearch(start)`: Performs a breadth-first search from the `start` vertex and returns an array of visited nodes.

## Usage

```javascript
const { Node, Graph } = require('./graph');

// Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Create graph
const graph = new Graph();

// Add nodes to graph
graph.addVertex(node1);
graph.addVertex(node2);
graph.addVertex(node3);

// Add edges
graph.addEdge(node1, node2);
graph.addEdge(node2, node3);

// Perform DFS and BFS
console.log(graph.depthFirstSearch(node1)); // [1, 2, 3]
console.log(graph.breadthFirstSearch(node1)); // [1, 2, 3]
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

Please ensure that you have Jest installed and properly configured in your `package.json` file.