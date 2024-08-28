function linear(num,target){
    for(let i=0;i<num.length;i++){
        if(num[i]===target){
            return i
        }
    }
    return -1
}

console.log(linear([1,2,3],3));


// function binary(num,target){
//     let leftIndex=0;
//     let rightIndex=num.length-1;
//     while(leftIndex<=rightIndex){
//         let middileIndex=Math.floor((leftIndex+rightIndex)/2);
//         if(target===num[middileIndex]){
//             return middileIndex
//         }
//         if(target<=num[middileIndex]){
//             rightIndex=middileIndex-1
//         }else{
//             leftIndex=middileIndex+1
//         }
//     }
//     return -1
// }
// console.log(binary([1,2,3,4,4,5,6],6));

function binary(num,target){
    let leftindex=0;
    let rightIndex=num.length-1;
    while(leftindex<=rightIndex){
        let middileIndex=Math.floor((leftindex+rightIndex)/2);
        if(target===num[middileIndex]){
            return middileIndex
        }
        if(target<=num[middileIndex]){
            rightIndex=middileIndex-1
        }else{
            leftindex=middileIndex+1
        }
    }
    
}

console.log(binary([1,2,3,4,4,5,6],6));


function Llinear(num,target){
for(i=0;i<num.length;i++){
    if(num[i]===target){
        return i
    }
}
return -1
}
console.log(Llinear([1,2,3,44,5],44));



function paliandrome(num){
    let start=0;
    let end=num.length-1;
    while(start<end){
        if(num[start]!=num[end]){
            return false
        }
        start++;
        end--;
    }
    return true
}
console.log(paliandrome([1,2,1]))

function factorial(num){
    fact=1;
    for(let i=1;i<num;i++){
        fact*=i
    }
    return fact
}
console.log(factorial(9));

// function fibinoacci(num){
//     let fib=[0,1];
//     for(let i=2;i<num;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibinoacci(6));

function fibinoacci(num){
    if(num<=1){
        return 1
    }
    return fibinoacci(num-1)+fibinoacci(num-2)
}
console.log(fibinoacci(5));

function factor(num){
    if(num<=1){
        return 1
    }
    return num*factor(num-1)

}
console.log(factor(6));

function palian(num){
    if(num.length<=1){
        return true
    }
    if(num[0===num[num.length-1]]){
        return palian(num.slice(1,-1))
    }
   
}
return true
console.log(palian([1,2,1]));

