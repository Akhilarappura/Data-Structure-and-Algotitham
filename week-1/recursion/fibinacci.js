// function fibinoacci(str){
//     let fibi=[0,1];
//     for(let i=2;i<str;i++){
//         fibi[i]=fibi[i-1]+fibi[i-2];
//     }
//     return fibi
// }
// console.log(fibinoacci(10));


//recursion
function fibinoacci(num){
    if(num<=1){
        return num
    }
    return fibinoacci(num-1)+fibinoacci(num-2)

}
console.log(fibinoacci(10));