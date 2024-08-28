const arr = [0,0,1,0,0,3,2];
// let length =arr.length
// console.log(length);


// let moveZero =(arr)=>{

// for(let i=0;i<arr.length;i++){
//     if(arr[i]===0){
//         arr.splice(i,1)
//         i--
//     }
// }
// let newLength = length-arr.length
// let i=0;
// while(i<newLength){
//     arr.push(0);
//     i++
// }

// return arr

// }
    
// console.log(moveZero(arr));


let zeromoveright =(arr)=>{
    let newArr = arr.filter((elem)=>elem!==0)
    let newLength = arr.length- newArr.length;
    let i=0;
    while(i<newLength){
        newArr.push(0);
        i++;
    }
    return newArr
}
console.log(zeromoveright(arr));
