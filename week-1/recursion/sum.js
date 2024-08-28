function sum(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i]
    }
    return sum
}
console.log(sum([1,2,3]));

//recursion
function sum1(num){
    if(num.length===0){
        return 0
    }
    return num[0]+sum1(num.slice(1))
}
console.log(sum1([1,2,3]));