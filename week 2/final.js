// function reverse(str){
//     let rev='';
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return rev
// }
// console.log(reverse("hello world"));

// function change(str){
//     let res=str.split(' ');
//     let rev='';
//     for(let i=res.length-1;i>=0;i--){
//         rev+=res[i]
//     }
//     return rev
// }
// console.log(change("hello world"));

// function cap(str){
//     let res=str.split(' ');
//     for(let i=0;i<res.length;i++){
//         res[i]=res[i].charAt(0).toUpperCase()+res[i].slice(1)
        
//     }
//     return res.join(' ')
// }
// console.log(cap('hello world'));
// function remove(str){
//     let vowels="aeiou";
//     let removed=[];
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             removed.push("*")
//         }else{
//             removed.push(str[i])
//         }
//     }
//     return removed
// }
// console.log(remove("akhilkrishnan"));

// function letter(str){
//     let x=str.split(' ');
//     for(let i=0;i<x.length;i++){
//         x[i]=x[i].charAt(0).toLowerCase()+x[i].slice(1).toUpperCase()

//     }
//     return x.join(' ')

// }
// console.log(letter("helloworld"));


// function longest(str){
//     let long='';
//     const words=str.split(' ');
//     for(let word of words){
//         if(word.length>long.length){
//             long=word
//         }
//     }
//     return long
// }
// console.log(longest("my name is akhilkrishnan"));

// function palaiandrome(str){
//     let start=0;
//     let end=str.length-1;
//     while(start<end){
//         if(str[start]!=str[end]){
//             return false
//         }
//         start++;
//         end--

//     }
//     return true
// }
// console.log(palaiandrome([1,2,1]));
// function dupli(str){
//     let dup=[];
//     for(let i=0;i<str.length;i++){
//         if(!dup.includes(str[i])){
//             dup.push(str[i])

//         }
//     }
//     return dup
// }
// console.log(dupli([1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]));
// function count(str){
//     let count=0;
//     let vowels=["a","e","i","o"]
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(count("akhilkrishnan"));

// function sum(num){
//     let summ=0;
//     for(let i=0;i<num.length;i++){
//         summ+=num[i]
//     }
//     return summ
// }
// console.log(sum([1,2,2]));

// function small(num){
//     let smallest=num[0];
//     for(let i=0;i<num.length;i++){
//         if(num[i]<smallest){
//             smallest=num[i]
//         }
//     }
//     return smallest
// }
// console.log(small([1,2,2,3,4,5,6]));

// function secondSmallest(num){
//     let smallest=num[0];
//     let secondSmallest;
//     for(let i=0;i<num.length;i++){
//         if(num[i]<smallest){
//             smallest=num[i];
//             secondSmallest=num[i+1]
//         }
//     }
//     return secondSmallest
// }
// console.log(secondSmallest([1,2,3,4,5]));

// function secondlargrst(num){
//     let largest=num[0];
//     let secondlargrst;
//     for(let i=0;i<num.length;i++){
//         if(num[i]>largest){
//             largest=num[i];
//             secondlargrst=num[i-1]
            
//         }
//     }
//     return secondlargrst
// }
// console.log(secondlargrst([1,2,3,4,5,6,7]));

// function factorial(num){
//     let fact=1;
//     for(let i=1;i<num;i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(factorial(9));

// function fibinoacci(num){
//     let fibi=[0,1];
//     for(let i=2;i<num;i++){
//         fibi[i]=fibi[i-1]+fibi[i-2]
//     }
//     return fibi
// }
// console.log(fibinoacci(8));

//recursion
function factorial(num){
    if(num<=1){
        return num
    }
    return num*factorial(num-1)
}
console.log(factorial(3));

function fibinoacci(num){
    if(num<=1){
        return num
    }
    return fibinoacci(num-1)+fibinoacci(num-2)
}
console.log(fibinoacci(8));

function sum(arr){
    if(arr.length===0){
        return 0
    }
    return arr[0]+sum(arr.slice(1))
}
console.log(sum([1,2,1]));
function reverse(str){
    if(str===""){
        return ""
    }
    return reverse(str.slice(1))+str.charAt(0)
}
console.log(reverse("helloworld"));
function palaiandrome(num){
    if(num.length<=1){
        return true
    }
    if(num[0]===num[num.length-1]){
        return palaiandrome(num.slice(1,-1))
    }
    return false
}
console.log(palaiandrome([1,2,1]));

function binary(arr,target,start=0,end=arr.length-1){
    if(start>end)return -1;
    let mid=Math.floor((start+end)/2);
    if(arr[mid]===target){
        return mid
    }
    else if(arr[mid]>target){
        return binary(arr,target,start,mid-1)
    }
    else{
        return binary(arr,target,mid+1)
    }
}
console.log(binary([1,2,3,4,5,6,7,8,9],9));

