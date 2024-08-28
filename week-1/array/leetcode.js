
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