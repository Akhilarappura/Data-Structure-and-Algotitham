//remove
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
    insert(value,index){
        if(index<0&&index>this.length){
            return
        }
        if(index==0){
            newNode.next=this.head;
            this.head=newNode
        }
        else{
            const newNode=new Node(value)
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
    middile(){
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

    print(){
        let current=this.head;
        let lisvalues='';
        while(current){
            lisvalues+=`${current.value} `;
            current=current.next
        }
        console.log(lisvalues.trim());
    }
 }


 let myLinledList=new linkedList(20);
 myLinledList.insert(21,1);
 myLinledList.insert(22,2);
 myLinledList.insert(23,3);
 myLinledList.insert(24,4)
 myLinledList.print()
 console.log(myLinledList.middile());
 myLinledList.print()