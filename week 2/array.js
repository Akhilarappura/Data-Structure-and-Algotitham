//reverse a string
function reverse(str){
    let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev
}
console.log(reverse("hello World"));

//helloworld to worldhello
function reverse1(str){
    let rev=''
    let res=str.split(' ');
    for(let i=res.length-1;i>=0;i--){
        rev+=res[i]
    }
    return rev
}
console.log(reverse1("hello world"));

//hello world to Hello World
function change(str){
 let res=str.split(' ')
    let rev;
    for(let i=0;i<res.length;i++){
        res[i]=res[i].charAt(0).toUpperCase()+res[i].slice(1)
        
    }
    return res.join(' ')
}
console.log(change("hello world"));

//remove vowels from string and replace *
function remove(str){
    let vowels=["a","e","i","o","u"];
    let array=[];
    for(let i=0;i<str.length-1;i++){
        if(vowels.includes(str[i])){
            array.push("*")

        }else{
            array.push(str[i])
        }
    }
    return array
}
console.log(remove("akhil krishanan"));

//convert the last letter to uppercase

// function last(letter){
//     let n=letter.length
//     let res=letter.split(' ');
//     for(let i=n-1;i<=0;i--){
//         let thhe=letter[i].charAt(n).toUpperCase()
//         return thhe
//     }
    
// }
// console.log(last("akhil krishanan")); //wrong

//find the longrst word
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

//paliandrome
function palian(str){

}
//remove duplicate in an array
function duplicate(array){
    let dupli=[];
    let arrai=[];
    for(let i=0;i<array.length;i++){
        if(!dupli.includes(array[i])){
           dupli.push(array[i])
        }else{
            arrai.push(array[i])
        }
       
    }
    return dupli

}
console.log(duplicate([1,1,1,1,1,2,2,2,2,3,3,3,4,4,4,5,5,5,5,5,5]));

//count vowels
function count(str){
    let count=0;
    vowels=["a","e","i","o","u"];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;
}

   console.log(count("akhil_krishnan"));


   //sum of numbers
   function sum(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i]
    }
    return sum
   }
   console.log(sum([1,2,3,4,5,6]));

//    smallest of  number
function smallest(num){
    let min=num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]<min){
            min=num[i]
        }
    }
    return min

}
console.log(smallest([0,2,3,4,5]));

//secondlargrst

function secondlargrst(num){
    let largest=num[0];
    let slargest
    for(let i=0;i<num.length;i++){
        if(num[i]>largest){
            largest=num[i]
            slargest=num[i-1]
        }
    }
    return slargest

}
console.log(secondlargrst([1,2,3,4,5,6,7,8,9]));

//factorial
function factorial(num){
    let fact=1;
    for(let i=1;i<num;i++){
        fact*=i
    }
    return fact
}
console.log(factorial(6));

//fibinoacci

function fibinoacci(num){
    let fibi=[0,1];
    for(let i=2;i<num;i++){
         fibi[i]=fibi[i-1]+fibi[i-2]
    }
    return fibi
}
console.log(fibinoacci(9));