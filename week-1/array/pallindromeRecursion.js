

let arr = [1, 2, 3, 2, 1];

let isPalindrome = (arr,left,right)=>{

    if(left>=right){
        return true
    }
    if(arr[left]!==arr[right]){
        return false
    }
    return isPalindrome(arr,left+1,right-1)

}
console.log(isPalindrome(arr,0,arr.length-1));
