

let arr = [4, 7, 9, 11, 12, 13 ,8 ,8 , 15, 16, 17, 18, 19, 20];

let isPrime=(num)=>{
    if(num<=1){
        return false
    }
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
let filteredArr =(arr)=>{
    let newArr=[]
    for(elem of arr){
        if(isPrime(elem)){
            elem=1
            newArr.push(elem)
        }else{
            elem=0
            newArr.push(elem)
        }
    }
    return newArr
}

console.log(filteredArr(arr));
