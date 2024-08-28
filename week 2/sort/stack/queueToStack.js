class QueueUsingStack {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }
    
    enqueue(x) {
        // Push element onto stack s1
        this.s1.push(x);
    }

    dequeue() {
        // If both stacks are empty, queue is empty
        if (this.s1.length === 0 && this.s2.length === 0) {
            return 'queue is empty';
        }

        // If stack s2 is empty, move elements from s1 to s2
        if (this.s2.length === 0) {
            while (this.s1.length !== 0) {
                this.s2.push(this.s1.pop());
            }
        }

        // Pop element from stack s2
        return this.s2.pop();
    }

    front() {
        // If both stacks are empty, queue is empty
        if (this.s1.length === 0 && this.s2.length === 0) {
            return 'queue is empty';
        }

        // If stack s2 is empty, move elements from s1 to s2
        if (this.s2.length === 0) {
            while (this.s1.length !== 0) {
                this.s2.push(this.s1.pop());
            }
        }

        // Return the top element from stack s2
        return this.s2[this.s2.length - 1];
    }

    empty() {
        // Queue is empty if both stacks are empty
        return this.s1.length === 0 && this.s2.length === 0;
    }

    print() {
        // Print the elements of the queue
        if (this.empty()) {
            console.log('queue is empty');
        } else {
            let traverse = [];

            // Elements in s2 are in reverse order
            for (let i = this.s2.length - 1; i >= 0; i--) {
                traverse.push(this.s2[i]);
            }

            // Elements in s1 are in original order
            for (let i = 0; i < this.s1.length; i++) {
                traverse.push(this.s1[i]);
            }

            console.log(traverse);
        }
    }
}

const obj = new QueueUsingStack();
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
obj.enqueue(4);

console.log(obj.front());  // Output: 1
console.log(obj.dequeue());  // Output: 1
console.log(obj.dequeue());  // Output: 2
obj.print();                // Output: [3, 4]
