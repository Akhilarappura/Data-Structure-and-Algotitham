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
    if(!this.head){
        this.head=newNode;
        this.tail=newNode
    }
    else{
        const newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode
    }
    this.length++;
    return this
  }
  prepand(value){
    if(!this.head){
        this.head=newNode;
        this.tail=newNode
    }else{
        const newNode=new Node(value);
        this.tail.next=newNode;
      this.tail=newNode
    }
    this.length++;
    return this
  }
  insert(value,index){
    const newNode=new Node(value)
    if(index<0&&index>this.length){
        return
    }
    if(index===0){
        newNode.next=this.head;
        this.head=newNode
    }else{
        const newNode=new Node(value);
        let prev=this.head;
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        newNode.next=prev.next;
        prev.next=newNode
    }
    this.length++;
    return this;
  }
  removeMiddile(){
    let fast=this.head;
    let slow=this.head;
    let prev=null;

    while(fast&&fast.next){
        fast=fast.next.next;
        prev=slow;
        slow=slow.next
    }
    if(prev){
        prev.next=slow.next;
        if(slow===this.tail){
            this.tail=prev
        }
        this.length--;
        return slow.value
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
        let listvalues="";
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
mylinkedlist.prepand(11);
mylinkedlist.prepand(10)
mylinkedlist.prepand(9);
mylinkedlist.print()
mylinkedlist.insert(15,0);
mylinkedlist.print()
mylinkedlist.removeMiddile();
mylinkedlist.print()
mylinkedlist.insertInMiddile(12);
mylinkedlist.print()