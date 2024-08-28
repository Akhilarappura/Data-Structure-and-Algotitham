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
    insert(value,index){
        if(index<0&&index>this.length){
            return
        }
        if(index===0){
            newNode.next=this.head;
            this.head=newNode;
        }
        else{
            const newNode=new Node(value);
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next;
            prev.next=newNode
        }
        this.length++;
        return this
    }
    removeMiddile(){
        let fast=this.head;
        let slow=this.head;
        let prev=null;

        while(fast&&fast.next){
            fast=fast.next.next;
            slow=slow.next;
            prev=slow
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

let mylinkedlist=new linkedList(1);
mylinkedlist.insert(2,1);
mylinkedlist.insert(3,2);
mylinkedlist.insert(4,3);
mylinkedlist.insert(5,4)
mylinkedlist.print()
console.log(mylinkedlist.removeMiddile());
mylinkedlist.removeMiddile()

