class Graph{
    constructor(){
         this.adjacentList={}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=new Set()
        }
    }
    addEdge(v1,v2){
        if(!this.adjacentList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjacentList[v2]){
            this.addVertex(v2)
        }
        this.adjacentList[v1].add(v2);
        this.adjacentList[v2].add(v1)
    }
    hasEdge(v1,v2){
        if(!this.adjacentList[v1]|| !this.adjacentList[v2]){
            return false
        }
        return this.adjacentList[v1].has(v2) && this.adjacentList[v2].has(v1)

    }
}

let graph=new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph);
graph.addEdge("A","B");
graph.addEdge("c","D")
// graph.addEdge("E","F");
console.log(graph);
console.log(graph.hasEdge("A", "B"));  // Should be true
console.log(graph.hasEdge("A"));

