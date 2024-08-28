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


    print(){
        if(!this.head){
            console.log('its empty');
        }
        let current = this.head;
        while(current){
            console.log(current.value);
            current= current.next;
        }
    }

   
}

let list1 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.append(5)
list1.print()
