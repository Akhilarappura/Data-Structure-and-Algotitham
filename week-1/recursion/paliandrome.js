// function paliandrome(num){
//     let start=0;
//     let end=num.length-1;
//     while(start<end){
//         if(!num[start]===num[end]){
//             return false
//         }
//         start++;
//         end--

//     }
//     return true
// }
// console.log(paliandrome([1,2,1]));

//recursion

function paliandrome(num){
    if(num.length<=1){
        return true
    }
    if(num[0]===num[num.length-1]){
        return paliandrome(num.slice(1,-1))
    }
    return false
}
console.log(paliandrome([1,2,1]));