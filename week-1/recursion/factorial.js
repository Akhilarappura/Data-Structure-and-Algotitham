// function factorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//        fact*=i
//     }
//     return fact
// }
// console.log(factorial(9));

//using recusrion

function factorial(num){
    if(num===0){
        return 1
    }
    return num*factorial(num-1)
}
console.log(factorial(9));