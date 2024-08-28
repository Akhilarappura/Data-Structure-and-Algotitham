class Node{
    constructor(value){
        this.value=value;
        this.next=null
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
    const newNode=new Node(value);
    if(!this.head){
        this.head=newNode;
        this.tail=newNode
    }
    else{
        newNode.next=this.head;
        this.head=newNode
    }
}
prepand(value){
    const newNode=new Node(value);
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;

    }else{
        this.tail.next=newNode;
       this.tail=newNode
    }
}
insert(value,index){
    if(index<0&&index>this.length){
        return 
    }
    if(index===0){
        newNode.next=this.head;
        this.head=newNode
    }
    else{
        const newNode=new Node(value);
        let prev=this.head
    }
}
insertInMiddile(value){
    const newNode=new Node(value);
    let fast=this.head;
    let slow=this.head;
    let prev=null;
    while(fast&&fast.next){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next
    }
    if(prev){
        newNode.next=slow;
        prev.next=newNode
    }else{
        newNode.next=this.head;
        this.head=newNode
    }
    this.length++
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

let myLinkedList=new linkedList(1)
myLinkedList.append(2)
myLinkedList.print()
myLinkedList.prepand(3);
myLinkedList.print()
myLinkedList.insertInMiddile(12);
myLinkedList.print()