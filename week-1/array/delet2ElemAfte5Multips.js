
let arr = [1, 2, 3, 5, 6, 7, 4, 10, 8, 9, 3];


let skipTwoAfterMultiplesOfFive=(arr)=>{

    for(i=0;i<arr.length;i++){
        if(arr[i]%5==0){
            arr.splice(i+1,2)            
        }
        
    }
    return arr
}

console.log(skipTwoAfterMultiplesOfFive(arr));