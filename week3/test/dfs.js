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
    removeEdge(v1,v2){
      if(!this.hasEdge(v1,v2)){
        return "no edges"
      }
        this.adjacentList[v1].delete(v2);
        this.adjacentList[v2].delete(v1)
    }

    dfs(start){
        let stack=[start];
        let result=[];
        let visited=new Set();
        let currentVertex;
        while(stack.length){
            currentVertex=stack.pop();
            result.push(currentVertex);
            this.adjacentList[currentVertex].forEach((ele)=>{
                if(!visited.has(ele)){
                    visited.add(ele);
                    stack.push(ele)
                }
            })
        }
        return result
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
console.log(graph.dfs("A"));
console.log(graph.removeEdge("A"));





