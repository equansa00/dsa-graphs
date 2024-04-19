class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = new Set();
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  addVertices(vertices) {
    vertices.forEach(vertex => this.nodes.add(vertex));
  }

  addEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    }
  }

  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  removeVertex(vertex) {
    if (this.nodes.has(vertex)) {
      Array.from(vertex.adjacent).forEach(adj => this.removeEdge(vertex, adj));
      this.nodes.delete(vertex);
    }
  }

  depthFirstSearch(start) {
    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length) {
      const node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);
        node.adjacent.forEach(adj => {
          if (!visited.has(adj)) {
            stack.push(adj);
          }
        });
      }
    }

    return result;
  }

  breadthFirstSearch(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);
        node.adjacent.forEach(adj => {
          if (!visited.has(adj)) {
            queue.push(adj);
          }
        });
      }
    }

    return result;
  }
}

module.exports = { Node, Graph };
