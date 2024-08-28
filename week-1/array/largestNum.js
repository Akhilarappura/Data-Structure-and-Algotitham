

// let arr=[1,2,9,5,7,4,8];

// let largestElem =(arr)=>{
//     let largest =arr[0];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>=largest){
            
//             largest=arr[i]
//         }
//     }
//     return largest
// }
// console.log(largestElem(arr));



var maxSubsequence = function(nums, k) {
    let smallest =nums[0]
    let smallIndex;
    let val = nums.length-k
    for(i=0;i<val;i++){
        for(j=0;j<nums.length;j++){
           if(nums[j]<=smallest){
            smallIndex=j
            }
        }
       let numss= nums.splice(smallIndex,1)
    }
    return nums
};


let arr=[-1,-2,3,8], k = 3


let res =maxSubsequence(arr,k)
console.log(res);