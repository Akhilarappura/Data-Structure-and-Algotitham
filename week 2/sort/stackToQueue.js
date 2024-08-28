class stackToqueue {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        // Move all elements from q1 to q2
        while (this.q1.length !== 0) {
            this.q2.push(this.q1.shift());
        }

        // Push the new element onto q1
        this.q1.push(x);

        // Move all elements back from q2 to q1
        while (this.q2.length !== 0) {
            this.q1.push(this.q2.shift());
        }
    }

    empty() {
        return this.q1.length === 0;
    }

    pop() {
        if (this.q1.length === 0) {
            return 'stack is empty';
        }
        return this.q1.shift();
    }

    top() {
        if (this.q1.length === 0) {
            return 'stack is empty';
        }
        return this.q1[0];
    }

    print() {
        if (this.q1.length === 0) {
            console.log('stack is empty');
        } else {
            console.log('Stack:', this.q1);
        }
    }
}

const obj = new stackToqueue();

obj.push(6);
obj.push(7);
obj.push(8);
obj.push(3);
obj.push(2);
obj.print();  // Output: Stack: [2, 3, 8, 7, 6]
console.log(obj.top());  // Output: 2
obj.pop();
obj.print();  // Output: Stack: [3, 8, 7, 6]
