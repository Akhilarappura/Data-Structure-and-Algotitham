// function mergeSort(ar){
//     if(ar.length<2){
//         return ar
//     }
//     const mid=Math.floor(ar.length/2);
//     const left=ar.slice(0,mid);
//     const right=ar.slice(mid);
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sorted=[];
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// const array=[1,2,6,7,3,4,9,0];
// console.log(mergeSort(array));


// function insertionsort(array){
//     for(let i=1;i<array.length;i++){
//         let numberToInsert=array[i];
//         let j=i-1;
//         while(j>=0&&array[j]>numberToInsert){
//             array[j+1]=array[j];
//             j=j-1
//         }
//         array[j+1]=numberToInsert
//     }
// }
// const array=[1,2,6,7,3,4,9,0];
// insertionsort(array)
// console.log((array));


// function quickSort(array){
//     if(array.length<2){
//         return array
// }
// const pivot=array[0];
// const left=[];
// const right=[];
// for(let i=1;i<array.length;i++){
//     if(array[i]<pivot){
//         left.push(array[i])
//     }else{
//         right.push(array[i])
//     }
// }
// return [...quickSort(left),pivot,...quickSort(right)]

// }
// const array=[1,2,6,7,3,4,9,0];
// console.log(quickSort(array));

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

// const mystack=new stack(12);
// mystack.push(13);
// mystack.push(14);
// mystack.print();
// mystack.pop();
// mystack.print()

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
//         this.length=1;
        
//     }
//     enqueue(value){
//         const newNode=new Node(value);
//         if(this.length==0){
//             this.first=newNode;
//             this.last=newNode
//         }else{
//             this.last.next=newNode;
//             this.last=newNode
//         }
//         this.length++;
//         return this
//     }
//     deQueue(){
//         if(this.length===0)return undefined;
//         let temp=this.first
//         if(this.length==1){
//             this.first=null;
//             this.last=null
//         }else{
           
//             this.first=this.first.next;
//             temp.next=null;
            
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
//         console.log((queueElements.join('->')));
        
//     }
// }

// const myqueue=new Queue(12);
// myqueue.enqueue(10);
// myqueue.enqueue(8);
// myqueue.print()
// myqueue.deQueue();
// myqueue.print()

