
class Node {
    constructor(value){
        this.value =value;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

  insert(value){
    let node = new Node(value)
    if(!this.head){
        this.head = node;
        return;
    }
    if(this.head.value>=value){
        node.next =this.head
        this.head= node;
        return;
    }
    let current = this.head;
    while(current.next && current.next.value<value){
        current =current.next
    }
    node.next =current.next;
    current.next = node
  }



    


   
    
    

    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current= current.next;
        }
    }
}

let list1 = new LinkedList()

console.log('insert');
list1.insert(1)
list1.insert(3)
list1.insert(5)
list1.insert(4)
list1.insert(2)
list1.print()
console.log('insert');



