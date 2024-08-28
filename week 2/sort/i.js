// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let numberToInsert=arr[i];
//         let j=i-1;
//         while(j>=0arr[j]>numberToInsert)
//             arr[j+1]
//     }
// }

// const x="175257";
// // const s=x.split('').sort((a,b)=>b-a).filter((num)=>num%2!==0);
// // console.log(s[0]);
// for(let i=x.length-1;i>=0;i--){
//     if(x[i]%2!==0){
//        x.slice(0,i+1)
        
//     }
    
// }
// console.log(x);


// const y="aassff123ssdf";
// const digit=y.match(/\d/g).sort((a,b)=>a-b)

// console.log(digit.length-1);


const str="67771339";
const array=[]
let count=0
for(let i=0;i<str.length;i++){
    if(str[i]===str[i+1]){
      
     array.push(str[i])
    count++
          
    }
}
console.log(array,count);
