//reverse a string

function reverse(str){
    let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev
}

console.log(reverse("hello world"));

//helloworld to world hello
function reverse1(str){
    let x=str.split(' ');
    let rev='';
    for(let i=x.length-1;i>=0;i--){
        rev+=x[i]
    }
    return rev
}

console.log(reverse1("hello world"));

//helloworld to Hello World

function cap(str){
    let x=str.split(' ');
    for(let i=0;i<x.length;i++){
        x[i]=x[i].charAt(0).toUpperCase()+x[i].slice(1)
    }
    return x.join(' ')
}

console.log(cap("helloworld"));

//remove vowels from string and replace *

function replace(str){
    let vowels=["a","e","i","o","u"];
    let array=[];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            array.push("*")
        }else{
            array.push(str[i])
        }
    }
    return array
}
console.log(replace("akhilkrishnan"));

//convert the last letter to uppercase
function convert(str){
    let x=str.split(' ');
    for(let i=0;i<x.length;i++){
        x[i]=x[i].charAt(0).toUpperCase()+x[i].slice(1)
    }
    return x.join('')
}
console.log(convert("hello world"));

//find the longest word
function longest(str){
    const words=str.split(' ');
    let long='';
  
    for(let word of words){
        if(word.length>long.length){
            long=word
        }
    }
    return long
}
console.log(longest("my name is akhilkrishnan"));

//palaiandrome

function palaiandrome(str){
    const num=str.toString();
    let start=0;
    let end=num.length-1;
    while(start<end){
        if(num[start]!==num[end]){
            return false
        }
        start++;
        end--
    }
    return true
}
console.log(palaiandrome([1,2,3]));

//remove duplicate in array
function remove(str){
    let dupli=[];
  
    for(let i=0;i<str.length;i++){
        if(!dupli.includes(str[i])){
            dupli.push(str[i])
        }
       
    }
    return dupli
   
   
}
console.log(remove([1,1,1,1,2,2,2,2,3,3,3,4,4,4,5,5,5]));

//count vowels
function count(str){
    let vowels=["a","e","i","o","u"];
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}

console.log(count("akhilkrishnan"));

//sum ofnumbers
function sum(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i]
    }
    return sum
}
console.log(sum([1,2,3]));

//smallest number
function smallest(num){
    let small=num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]<small){
            small=num[i]
        }
    }
    return small
}
console.log(smallest([1,2,3,4,5]));

//second largest

function secondlargrst(num){
    let largest=num[0];
    let secondlargrst;
    for(let i=0;i<num.length;i++){
        if(num[i]>largest){
            largest=num[i];
            secondlargrst=num[i-1]
            
        }
    }
    return secondlargrst
}
console.log(secondlargrst([1,2,3,4,5,6,7]));

//factorial

function factorial(num){
    let fact=1;
    for(let i=1;i<num;i++){
        fact*=i
    }
    return fact
}
console.log(factorial(9));

//fibinoacci
function fibinoacci(num){
    let fib=[0,1];
    for(let i=2;i<num;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibinoacci(9));