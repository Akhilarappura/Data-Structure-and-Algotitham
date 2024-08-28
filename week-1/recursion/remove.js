function remove(str){
    let rem='';
    let array=[]
    let vowels="aeiou";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            rem+=str[i]
        }else{
            array.push(str[i])
        }
    }
    return array
}
console.log(remove("akhilkrishann"));

//last letter to uppercase
function upper(str){
    let lastChar= str.charAt(str.length-1).toUpperCase()
       let restOfString = str.slice(0, str.length - 1);
   return restOfString+lastChar
   }
   
   
   console.log(upper('hello'))
   