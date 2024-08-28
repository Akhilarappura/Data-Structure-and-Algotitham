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



    insertMiddle(value){
        const node = new Node(value);

        // if (!this.head) {
        //     this.head = node;
        //     return;
        // }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        
        if (fast) { // Odd number of elements
            node.next = slow.next;
            slow.next = node;
        } else { // Even number of elements
            node.next = slow;
            if (prev) {
                prev.next = node;
            } else {
                this.head = node;// When inserting into a list with two elements, adjust the head
            }
        }
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

// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(5)
// list1.append(6)




list1.insertMiddle(9000)
list1.insertMiddle(1)
list1.insertMiddle(2)
list1.insertMiddle(3)
list1.insertMiddle(4)
list1.print()


