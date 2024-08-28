

let factorialSum =(num)=>{
    if(num<=1){
        return 1
    }
    return num* factorialSum(num-1)
}
console.log(factorialSum(3));