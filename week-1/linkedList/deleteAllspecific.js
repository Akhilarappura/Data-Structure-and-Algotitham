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

    delete(value){
        if(!this.head){
            return
        }
        if(this.head.value===value){
            this.head = this.head.next
            // return
        }
        let current =this.head;
        while(current.next){
            if(current.next.value===value){
                current.next =current.next.next
                // return
            }else{
                current = current.next
            }
        }
    }
}

let list1 = new LinkedList()

console.log('append');
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(2)
list1.append(4)
list1.append(2)
list1.append(5)


list1.print()
console.log('append');


list1.delete(2)

console.log('after deletion');
list1.print()



