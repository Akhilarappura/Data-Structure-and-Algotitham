//quickSort

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     const pivot=arr[0];
//     const left=[];
//     const right=[];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// const arr=[1,2,3,5,6,4,-1,-2,-4];
// console.log(quickSort(arr));

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
//         if(this.length===0){
//             newNode.next=this.first;
//             this.first=newNode
//         }else{
//             const newNode=new Node(value);
//             this.last.next=newNode;
//             this.last=newNode
//         }
//         this.length++;
//         return this

//     }
//     deQueue(){
//         if(this.length===0)return undefined
//         let temp=this.first;
//         this.first=this.first.next;
//         temp.next=null
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

// let myQueue=new Queue(20);
// myQueue.enequeue(2);
// myQueue.enequeue(3);
// myQueue.enequeue(4);
// myQueue.print()
// myQueue.deQueue();
// myQueue.print()




class HashTable{
    constructor(size){
        this.size=new Array(size);
        this.size=size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        const index= this.hash(key);
        this.table[index]=value
    }
    get(key){
        const index=this.hash(key);
        this.table[index]
    }
    remove(){
        const index=this.hash(key);
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}


const table=new HashTable(30);
table.set('name','akhil');
table.set('age',26);
table.display()