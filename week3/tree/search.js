class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null

    }
    insert(value){
        const newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this
        }
        let temp=this.root;
        while(true){
            if(newNode.value===temp.value)return undefined;
            if(newNode.value<temp.value){
                if(temp.left===null){
                    temp.left=newNode;
                    return this
                }
                temp=temp.left
            }else{
                if(temp.right===null){
                    temp.right=newNode
                    return this
                }
                temp=temp.right;
            }
        }
    }
contains(value){
    if(this.root===null)return false;
    let temp=this.root;
   while(temp!==null){
    if(value<temp.value){
        temp=temp.left
    }else if(value>temp.value){
        temp=temp.right
    }else{
        return true
    }
   } 
   return false
}
}

let myTree=new binarySearchTree()
myTree.insert(12);
myTree.insert(10)
myTree.insert(22)
myTree.insert(33)
myTree.insert(44)
myTree.insert(55)
myTree.insert(66)
myTree.insert(77)
myTree.insert(88)
myTree.insert(99)
myTree.insert(11)
myTree.insert(21)
console.log(myTree);
console.log(myTree.contains(33));
console.log(myTree.contains(666));




