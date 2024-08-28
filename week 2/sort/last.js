//bubblesort
function bubble(sort){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<sort.length;i++){
            if(sort[i]>sort[i+1]){
                let temp=sort[i];
                sort[i]=sort[i+1];
                sort[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
}

const sort=[-10,-20,1,4,2,7,5,6];
bubble(sort);
console.log(sort);

//mergeSort
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2);
    const left=arr.slice(0,mid);
    const right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
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
const sortt=[-10,-20,1,4,2,7,5,6];

console.log("merge" ,mergeSort(sortt));

//quicksort

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    const pivot=arr[0];
    const left=[];
    const right=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right)]
}

const arrr=[1,2,3,4,5,6,-1,-10,-5];
console.log(quickSort(arrr));

//insertionSort
function insertion(arr){
    for(let i=1 ;i<arr.length;i++){
        let numberToInsert=arr[i];
        let j=i-1;
        while(j>=0&&arr[j]>numberToInsert){
            arr[j+1]=arr[j];
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
}
const a=[1,2,3,4,5,6,-1,-10,-5];
insertion(a)
console.log(a);
