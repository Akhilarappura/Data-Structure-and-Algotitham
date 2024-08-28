//insert

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
        if(index===0){
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
    insertMiddile(value){
        const newNode=new Node(value)
        let fast=this.head;
        let slow=this.head;
        let prev=null;
        while(fast&&fast.next){
            prev=slow;
            slow=slow.next;
            fast=fast.next.next
        }
       
        if (prev) {
            newNode.next = slow;
            prev.next = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        
    }
    replace(target,newValue){
        let curr=this.head;
        while(curr){
            if(curr.value===target){
                curr.value=newValue
            }else{
                curr=curr.next
            }
        }
    }
    delete(target){
        if(this.head.value===target){
            this.head = this.head.next
            // return
        }
        let curr=this.head;
        while(curr){
            if(curr.value===target){
                curr=curr.next.next
            }else{
                curr=curr.next
            }
        }
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

let myLinkedList=new linkedList(12);
myLinkedList.insert(13,1);
myLinkedList.insert(14,2);
myLinkedList.insert(15,3);
myLinkedList.insert(16,4);
myLinkedList.print()
myLinkedList.insertMiddile(20)
myLinkedList.print()
myLinkedList.replace(20,21);
myLinkedList.print()
myLinkedList.delete(12);
myLinkedList.print()
myLinkedList.delete(12);
myLinkedList.print()


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = newNode;
//         this.length = 1;
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.length) {
//             return this; // Invalid index, do nothing
//         }

//         const newNode = new Node(value);
        
//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//         } else if (index === this.length) {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         } else {
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }
//             newNode.next = prev.next;
//             prev.next = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     insertionSort() {
//         if (!this.head || !this.head.next) return;

//         let sorted = null;
//         let current = this.head;
        
//         while (current !== null) {
//             let next = current.next;
//             if (sorted === null || sorted.value >= current.value) {
//                 current.next = sorted;
//                 sorted = current;
//             } else {
//                 let temp = sorted;
//                 while (temp.next !== null && temp.next.value < current.value) {
//                     temp = temp.next;
//                 }
//                 current.next = temp.next;
//                 temp.next = current;
//             }
//             current = next;
//         }
//         this.head = sorted;
//     }

//     print() {
//         let curr = this.head;
//         let listValues = '';
//         while (curr) {
//             listValues += `${curr.value} `;
//             curr = curr.next;
//         }
//         console.log(listValues.trim());
//     }
// }

// // Usage
// let myLinkedList = new LinkedList(-20);
// myLinkedList.insert(-10, 1);
// myLinkedList.insert(2, 2);
// myLinkedList.insert(10, 3);
// myLinkedList.insert(5, 4);
// myLinkedList.insert(3, 5);
// myLinkedList.print(); // Output: -20 -10 2 10 5 3
// myLinkedList.insertionSort();
// myLinkedList.print(); // Output: -20 -10 2 3 5 10


    