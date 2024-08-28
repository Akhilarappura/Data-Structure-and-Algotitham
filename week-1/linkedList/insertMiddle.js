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

    findMiddleElem(){
        if (!this.head) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        let length = 0;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            length += 2;
        }

        if (fast === null) {
            let current = this.head;
            for (let i = 1; i < length / 2; i++) {
                current = current.next;
            }
            return { "middle value": current.value };
        }

        return { "middle value": slow.value };
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
list1.append(6)
list1.append(7)
// list1.append(8)
list1.print()



console.log(list1.findMiddleElem());

