//bubbleSort

function bubble(arr){
    if(arr.length<2){
        return arr
    }
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp
                swapped=true
            }
        }

    }while(swapped)
}

const arr=[12,-1,1,2,5,3,4,6,7]
bubble(arr);
console.log(arr);

//quick sort
function quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1];
    const left=[];
    const right=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]

}

const arrr=[1,2,3,4,5,6,-1,-10,-5];
console.log(quick(arrr));



//merge Sort

function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2);
    const left=arr.slice(0,mid);
    const right= arr.slice(mid)
    return merge(mergesort(left),mergesort(right))
}
function merge(left,right){
    const sorted=[];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

const arrrr=[1,2,5,3,7,5,8,9,-10];
console.log(mergesort(arrrr));

//insertionSort

function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i];
        j=i-1
        while(j>=0&&arr[j]>numberToInsert){
            arr[j+1]=arr[j];
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
}
const arrrrr=[1,2,5,3,7,5,8,9,-10];
insertion(arrrrr)
console.log((arrrrr));


//
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
