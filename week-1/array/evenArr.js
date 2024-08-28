

function oddNum(arr){
    // let newArr =[];
    for(i = 0;i <=arr.length-1;i ++){
        if (arr[i] % 2 === 0) {

            // newArr.push(arr[i])
            arr.splice(i,1)
        }
    }
    // return newArr
    return arr
}

let arr = [1,2,3,4,5,6,7,8]
console.log(oddNum(arr));

