

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        return;
      }
      if (this.head.value >= value) {
        node.next = this.head;
        this.head = node;
        return;
      }
      let current = this.head;
      while (current.next && current.next.value < value) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  
    search(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }


    
findLocation(data) {
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.data === data) {
            return index; // Found the element, return its index
        }
        current = current.next;
        index++;
    }
    return -1; // Element not found
}
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  let list1 = new LinkedList();
  
  list1.insert(1);
  list1.insert(4);
  list1.insert(2);
  list1.insert(5);
  list1.insert(3);
  
  list1.print();
  
  console.log(list1.search(5));
  console.log(list1.findLocation(5));
  




