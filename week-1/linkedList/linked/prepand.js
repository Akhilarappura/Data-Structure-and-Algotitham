class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class linkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode;
        this.tail=newNode;
        this.length=1
    }
    prepand(value){
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
        }
        else{
            const newNode=new Node(value);
            this.tail.next=newNode;
            this.tail=newNode
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
mylinkedlist.prepand(13);
mylinkedlist.prepand(14);
mylinkedlist.print()