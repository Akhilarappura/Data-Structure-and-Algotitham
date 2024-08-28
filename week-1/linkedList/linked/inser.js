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
                prev=prev.next
            }
            newNode.next=prev.next;
            prev.next=newNode
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

let mylinkedlist=new linkedList(8);
mylinkedlist.insert(9,1);
mylinkedlist.insert(10,2);
mylinkedlist.insert(11,3);
mylinkedlist.print()