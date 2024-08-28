class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Queue{
    constructor(value){
        const newNode=new Node(value);
        this.first=newNode;
        this.last=newNode
        this.length=1
    }
   enequeue(value){
    const newNode=new Node(value);
    if(this.length===0){
        this.first=newNode;
        this.last=newNode
    }else{
       this.last.next=newNode
        this.last=newNode
    }
    this.length++;
    return this
   }
   dQueue(){
    if(this.length===0)return undefined;
    let temp=this.first;
    if(this.length==1){
        this.first=null;
        this.last=null
    }else{
        this.first=this.first.next;
        temp.next=null
    }
    this.length--;
    return temp
   }
   print(){
    let current=this.first;
    let queueElements=[];
    while(current){
        queueElements.push(current.value);
        current=current.next
    }
    console.log(queueElements.join('->'));
   }
}

let myQueue=new Queue(2);
myQueue.enequeue(3);
myQueue.enequeue(4);
myQueue.print()
myQueue.dQueue();
myQueue.print()