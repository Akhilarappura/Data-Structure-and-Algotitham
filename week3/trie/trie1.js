class Node{
    constructor(){
        this.children={};
        this.isEndOfWord=false
    }
}

class TireNode{
    constructor(){
        this.root=new Node() 
    }
    insert(word){
        let currentNode=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i]
            if(!currentNode.children[char]){
                currentNode.children[char]=new Node()
            }
            currentNode=currentNode.children[char]
        }
        currentNode.isEndOfWord=true
    }
    search(word){
        let currentNode=this.root;
        for(let i=0;i<word.length;i++){
            let char=word[i];
            if(!currentNode.children[char]){
              return false
            }
            currentNode=currentNode.children[char]   
     }
     return currentNode.isEndOfWord
    }
    findWordWithPrefix(prefix){
        
    }
    
}

let trie=new TireNode();

trie.insert("apply");
trie.insert("applying")
trie.insert("apple");
trie.insert("appleBall")
console.log(trie);
console.log(trie.search("apply"));


