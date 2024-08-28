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

    append(value){
        const node =  new Node(value);
        if(!this.head){
            this.head = node
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = node;
    }

    prepend(value){
        const node = new Node(value);
        node.next =this.head;
        this.head = node;
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

console.log('append');
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(2)
list1.append(1)
list1.print()
console.log('append');

console.log('prepend');
list1.prepend(6)
list1.prepend(7)
list1.prepend(8)
list1.print()
console.log('prepend');



