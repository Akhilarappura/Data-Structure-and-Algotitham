    class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1);
        }
        if (!this.adjacencyList[v2]) {
            this.addVertex(v2);
        }
        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
    }
    
    hasEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            return false;  // Return false if either vertex doesn't exist
        }
        return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
    }
    
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph);

graph.addEdge("A", "B"); 
graph.addEdge("B", "C");
console.log(graph);
console.log(graph.hasEdge("A", "B"));  // Should be true
console.log(graph.hasEdge("a", "b"));  // Should be false, as "a" and "b" don't exist
