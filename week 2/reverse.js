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
            this.head=newNode
        }
        else{
            const newNode=new Node(value);
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            newNode.next=prev.next;
            prev.next=newNode
        }
        this.length++;
        return this
    }
    reverse(){
        let prev=null;
        let curr=this.head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next
        }
      this.head=prev
    }
    print(){
        let current=this.head;
        let listvalues='';
        while(current){
            listvalues+=`${current.value} `;
            current=current.next;
        }
        console.log(listvalues.trim());
    }
}
let myLinledList=new linkedList(20);
 myLinledList.insert(21,1);
 myLinledList.insert(22,2);
 myLinledList.insert(23,3);
 myLinledList.insert(24,4)
 myLinledList.print()
 myLinledList.reverse();
 myLinledList.print()