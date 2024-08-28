// function reverse(str){
//     let rev='';
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return rev
// }
// console.log(reverse("helloworld"));

//recursion

function reverse(str){
    if(str===""){
        return ""
    }
    return reverse(str.slice(1))+str.charAt(0)
}
console.log(reverse("helloworld"));