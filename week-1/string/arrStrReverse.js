

let strArr = ['hello', 'world'];

let reverse = (strArr)=>{
    let arrNew=[];
for(i=0;i<=strArr.length-1;i++){
    arrNew.push(strArr[i].split('').reverse().join().replace(/,/g,''))
}
return arrNew
}
console.log(reverse(strArr));



let reverse2 =(strArr)=>{

    let newArr = [];
    for(i=0;i<strArr.length;i++){
        let reverseWord="";
        for(j=strArr[i].length-1;j>=0;j--){
            reverseWord += strArr[i][j]
        }
        newArr.push(reverseWord)

    }
    return newArr


}
console.log(reverse2(strArr));