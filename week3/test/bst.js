class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNOde=new Node(value);
        if(this.root===null){
            this.root=newNOde;
            return this
        }
        let temp=this.root;
        while(temp){
            if(newNOde.value===temp.value)return undefined;
            if(newNOde.value<temp.value){
                if(temp.left===null){
                    temp.left=newNOde;
                    return this
                }
                temp=temp.left
            }else{
                if(temp.right===null){
                    temp.right=newNOde;
                    return this
                }
                temp=temp.right
            }
        }
    }
    contains(value){
        if(this.root===null)return undefined;
        let temp=this.root;
        if(value<temp.value){
            temp=temp.left
        }else if(value>temp.value){
            temp=temp.right

        }else{
            return true
        }
        return false
    }
    dfsPreorder(){
        const data=[];
        function traverse(Node){
            if(Node===null)return;
            data.push(Node.value);
            traverse(Node.left);
            traverse(Node.right)
        }
        traverse(this.root);
        return data
    }
    //Validate whether a given tree is BST or not.

    isValidbst(root,min=-Infinity,max=Infinity){
        if(root===null){
            return true
        }
        if(root.value<=min || root.value>=max){
            return false
        }
        return this.isValidbst(root.left,min,root.value) && this.isValidbst(root.right,root.value,max)
    }
}


let bst=new BinarySearchTree();
bst.insert(12)
bst.insert(14)
bst.insert(33)
console.log(bst);
console.log(bst.contains(129));
console.log(bst.dfsPreorder());
console.log(bst.isValidbst(bst.root));



