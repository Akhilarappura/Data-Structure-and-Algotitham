

let fibennocciSum=(num)=>{
    if(num<=1){
        return 1
    }
    return fibennocciSum(num-1)+fibennocciSum(num-2)
}


let fibennocciSeq =(num,a=0,b=1)=>{
    if(num==0){
        return [];
    }
    if(num==1){
        return [a];
    }
    let seq = fibennocciSeq(num-1,b,a+b);
    seq.unshift(a);
    return seq;
}

console.log(fibennocciSeq(6));












// console.log(fibennocciSum(1));
// console.log(fibennocciSum(2));
// console.log(fibennocciSum(3));
// console.log(fibennocciSum(4));
// console.log(fibennocciSum(5));
// console.log(fibennocciSum(6));