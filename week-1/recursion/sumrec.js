// function sum(num){
//     let sum=0;
//     for(let i=0;i<num.length;i++){
//         sum+=num[i]
//     }
//     return sum
// }
// console.log(sum([1,2,3]));

// recursion

function sum(num){
    if(num<=0){
        return 0
    }
    return num[0]+sum(num.slice(1))
}
console.log(sum([1,2,1]));