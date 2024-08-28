class MaxBinaryHeap{
    constructor(){
        this.values=[]
    }
    insert(value){
        this.values.push(value);
        this.bubbleUp()
    }
    bubbleUp(){
        let index=this.values.length-1;
        let element=this.values[index];
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            let parent=this.values[parentIndex];
            if(element<=parent)break;
            this.values[parentIndex]=element;
            this.values[index]=parent;
            index=parentIndex
        }
    }
    extractMax(){
        const max=this.values[0];
        const end=this.values.pop();
        if(this.values.length>0){
            this.values[0]=end;
            this.sinkDown()
        }
        return max
    }
    sinkDown(){
        let index=0;
        let length=this.values.length;
        let element=this.values[0];
        while(true){
            let leftChildIndex=2*index+1;
            let rightChildIndex=2*index+2;
            let leftChild=this.values[leftChildIndex];
            let rightChild=this.values[rightChildIndex];
            let swap=null;
            if(leftChildIndex<length&&leftChild>rightChild){
                if(leftChild>element){
                    swap=leftChildIndex
                }
            }else{
                if(rightChild>element){
                    swap=rightChildIndex
                }
            }
            if(swap===null)break;
            this.values[index]=this.values[swap];
            this.values[swap]=element;
            index=swap
        }
    }
}

function heapSort(array){
    const maxHeap=new MaxBinaryHeap();
    array.forEach((num)=>maxHeap.insert(num));
    const sortedArray=[];
    while(maxHeap.values.length>0){
        sortedArray.push(maxHeap.extractMax())
    }
    return sortedArray.reverse()
}

const array=[100,99,1,91,5,88,98,45]
const sorted=heapSort(array);
console.log("Original array",array);
console.log("sorted array",sorted);




let heap=new MaxBinaryHeap();
heap.insert(100)
heap.insert(55)
heap.insert(22)
heap.insert(94)
heap.insert(66)
heap.insert(56)
heap.insert(44)
heap.insert(88)
heap.insert(99)
console.log(heap);
console.log("maxRemoved",heap.extractMax());
console.log(heap);