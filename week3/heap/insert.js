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
    
}


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




