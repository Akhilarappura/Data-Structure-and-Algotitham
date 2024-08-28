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
    merge(otherList){
        if(!otherList.head){
            console.log('its empty');
            this.print()
        }
        if(!this.head){
            this.head = otherList.head
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next =otherList.head;
        
    }
}

let list1 = new LinkedList()

console.log('L1');
list1.append(1)
list1.append(2)
list1.append(3)
list1.print()
console.log('L1');



let list2 = new LinkedList()
console.log('L2');
list2.append(6)
list2.append(7)
list2.append(8)
list2.print()
console.log('L2');



console.log('merge');
list1.merge(list2)
list1.print()
console.log('merged');





