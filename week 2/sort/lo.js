// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// class Queue{
//     constructor(value){
//         const newNode=new Node(value);
//         this.first=newNode;
//         this.last=newNode;
//         this.length=1
//     }

//     enqueue(value){
//         const newNode=new Node(value);
//         if(this.length===0){
//             this.first=newNode;
//             this.last=newNode
//         }
//         else{
//             this.last.next=newNode;
//             this.last=newNode
//         }
//         this.length++;
//         return this
//     }
//     deQueue(){
//         if(this.length===0)return undefined;
//         let temp=this.first;
//         if(this.length===1){
//             this.first=null;
//             this.last=null
//         }else{
//             this.first=this.first.next;
//             temp.next=null
//         }
//         this.length--;
//         return temp
        
//     }
//     print(){
//         let current=this.first;
//         let queueElements=[];
//         while(current){
//             queueElements.push(current.value);
//             current=current.next
//         }
//         console.log(queueElements.join('->'));
//     }
// }


// let myQueue=new Queue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// myQueue.print()
// myQueue.deQueue();
// myQueue.print()


//stack
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// class stack{
//     constructor(value){
//         const newNode=new Node(value);
//         this.top=newNode;
//         this.length=1
//     }

//     push(value){
//         const newNode=new Node(value);
//         if(this.length===0){
//             this.top=newNode
//         }else{
//             newNode.next=this.top;
//             this.top=newNode
//         }
//         this.length++;
//         return this
//     }
//     pop(){
//         if(this.length===0)return undefined;
//         let temp=this.top;
//         this.top=this.top.next;
//         temp.next=null;
//         this.length--;
//         return temp
//     }

//     print(){
//         let current=this.top;
//         let stackElements=[];
//         while(current){
//             stackElements.push(current.value);
//             current=current.next
//         }
//         console.log(stackElements.join('->'));
//     }
// }

// let mystack=new stack(2);
// mystack.push(3);
// mystack.push(4);
// mystack.print()
// mystack.pop();
// mystack.print()


//mergeSort
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2);
//     const left=arr.slice(0,mid);
//     const right=arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     const sorted=[];
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]

// }

// const arr=[-10,-20,5,4,3,2,1,8]
// console.log(mergeSort(arr));

//quickSort
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1];
//     const left=[];
//     const right=[];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const arr=[-1,-20,4,3,6,2,1];
// console.log(quickSort(arr));


//bubblesort
// function bubble(arr){
//     let swapped;
//     do{
//         swapped=false;
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }

// const arr=[5,6,7,4,3,2,8,1,1-1];
// bubble(arr);
// console.log(arr)


// //insertion sort
// function insertion(sort){


// //stack
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }

  
// }
// class Stack{
//     constructor(value){
//         const newNode=new Node(value);
//         this.top=newNode;
//         this.length=1
//     }

//     push(value){
//         const newNode=new Node(value);
//         if(this.length===0){
//             this.top=newNode
//         }else{
//             newNode.next=this.top;
//             this.top=newNode
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(this.length===0)return undefined;
//         let temp=this.top;
//         this.top=this.top.next;
//         temp.next=null;
//         this.length--;
//         return temp
//     }
//     print(){
//         let current=this.top;
//         let stackElements=[];
//         while(current){
//             stackElements.push(current.value);
//             current=current.next
//         }
//         console.log(stackElements.join('->'));
        
//     }
// }

// let mystack=new Stack(23);
// mystack.push(24);
// mystack.push(25);
// mystack.push(26);
// mystack.print();
// mystack.pop();
// mystack.print()

//queue
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// class Queue{
//     constructor(value){
//         const newNode=new Node(value);
//         this.first=newNode;
//         this.last=newNode;
//         this.length=1
//     }
//     enequeue(value){
//         const newNode=new Node(value);
//         if(this.length==0){
//             this.first=newNode;
//             this.last=newNode;
//         }else{
//             this.last.next=newNode;
//             this.last=newNode
//         }
//         this.length++;
//         return this
//     }
//     deQueue(value){
//         if(this.length==0)return undefined;
//         let temp=this.first;
//         if(this.length==1){
//             this.first=newNode;
//             this.last=newNode
//         }else{
//             this.first=this.first.next;
//             temp.next=null
//         }
//         this.length--;
//         return temp;
//     }
//     print(){
//         let current=this.first;
//         let queueElements=[];
//         while(current){
//         queueElements.push(current.value)
//             current=current.next
//         }
//         console.log(queueElements.join('->'));
        
//     }
// }

// let myQueue=new Queue(22);
// myQueue.enequeue(23);
// myQueue.enequeue(24);
// myQueue.enequeue(24);
// myQueue.print()
// myQueue.deQueue();
// myQueue.print()



//stack to queue

class stackToqueue{
    constructor(){
        this.q1=[];
        this.q2=[]
    }
    push(x){
        while(this.q1.length!==0){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(x);
        while(this.q2.length!==0){
            this.q1.push(this.q2.shift())
        }
    }
    empty(){
        return this.q1.length==0
    }
    pop(){
        if(this.q1.length==0){
            return 'Stack is empty'
        }else{
            return this.q1.shift()
        }
    }
    top(){
        if(this.q1.length==0){
            return 'Stack is empty'
        }
        return this.q1[0]
    }
    print(){
        if(this.q1.length==0){
            console.log("Stack is empty");
            
        }else{
            console.log('stack',this.q1);
            
        }
    }
}

const obj=new stackToqueue(22);
obj.push(12);
obj.push(13);
obj.push(14);
obj.print()