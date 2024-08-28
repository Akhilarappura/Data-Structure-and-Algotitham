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
    remove(){
       
        let current=this.head;
        while(current){
            if(current.value===current.next){
                current.next=current.next.next
            }else{
                current=current.next
            }
        }
    }
    reverse(){
        let prev=null;
        let current=this.head;
        while(current){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next
        }
        this.head=prev
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

let myLinledList=new linkedList(1);
myLinledList.insert(3,1);
myLinledList.insert(5,2);
myLinledList.insert(7,3)

myLinledList.print()
myLinledList.insert(11,4)
myLinledList.insert(3,5);
myLinledList.insert(5,6);
myLinledList.insert(7,7)
myLinledList.print()
myLinledList.remove();
myLinledList.print()
