class Node{
    constructor(){
        this.children={};
        this.isEndOfWord=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let currentNode=this.root;
        for(let i=0;i<word.length;i++){
            let char=word[i];
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
        return currentNode.isEndOfWord;
    } 
    findWordsWithPrefix(prefix){
        let currentNode=this.root;
        for(let i=0;i<prefix.length;i++){ 
            const char=prefix[i];
            if(!currentNode.children[char]){
                return [];

            }
            currentNode=currentNode.children[char]
        }
        let results=[];
        this.collectWords(currentNode,prefix,results);
        return results;
    } 
    collectWords(node,word,results){
        if(node.isEndOfWord){
            results.push(word)
        }
        for (const char in node.children) {
            this.collectWords(node.children[char], word + char, results);
        }

    }
}


let trie=new Trie();

trie.insert("app")
trie.insert("apple")
trie.insert("apply")
trie.insert("application")
trie.insert("apppasswod")
console.log(trie);
console.log(trie.search("application"));
console.log(trie.findWordsWithPrefix('app')); 


