class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(value){
        const newNode=new Node(value);
        this.head=newNode;
        this.tail=newNode;
        this.length=1
    }

    append(value){
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
        }else{
            const newNode=new Node(value)
            newNode.next=this.head;
            this.head=newNode
        }
        this.length++;
        return this

    }
    print(){
        let current=this.head;
        let listvalues='';
        while(current){
            listvalues+=`${current.value} `;
            current=current.next
        }
        console.log(listvalues.trim());
    }
}

let mylinkedlist=new linkedList(12);
mylinkedlist.append(13);
mylinkedlist.append(14);
mylinkedlist.print()