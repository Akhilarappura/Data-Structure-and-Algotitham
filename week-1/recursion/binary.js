function binary(arr,target,start=0,end=arr.length-1){
    if(start>end)return -1;
    let mid=Math.floor((start+end)/2);
    if(arr[mid]===target){
        return mid
    }
    else if(arr[mid]>target){
        return binary(arr,target,start,mid-1)
    }
    else{
        return binary(arr,target,mid+1)
    }
}

console.log(binary([1,2,3,4,5,6,7,8,9],4));