let arr = [1, 2, 4, 8, 3, 9, 12, 4, 17, 18, 20];

let isPrime=(n)=>{
    if(n<=1){
        return false
    }
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}


let checkPrime =(arr)=>{
    let sum=0;
    for(value of arr){
        if(isPrime(value)){
            console.log(value ," +");
            sum+=value
        }
    }
    return sum
}

console.log(checkPrime(arr));