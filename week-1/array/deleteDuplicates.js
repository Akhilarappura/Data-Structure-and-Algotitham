let arr =[1,2,1,2,2,1,1,3,3,4]


let deleteDupWithSet =(arr)=>{
    // let set =new Set(arr)
    // return Array.from(set)
    let set =[...new Set(arr)]
    return set
}



console.log(' ');
console.log('o(n)');
console.log(deleteDupWithSet(arr));




let uniqueArr = [];
arr.forEach(element => {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
});
console.log('o(n^2)');
console.log(uniqueArr); // Output: [1, 2, 3]








let uniqueArr2 = [];
    for(i=0;i<arr.length;i++){
    if (!uniqueArr2.includes(arr[i])) {
        uniqueArr2.push(arr[i]);
    }
}
console.log('o(n^2)');
console.log(uniqueArr2); // Output: [1, 2, 3]






let arr2 =[1,2,1,2,2,1,1,3,3,4]

let spliceDelete =(arr2)=>{
    for(i=0;i<arr2.length;i++){
        for(j=i+1;j<arr2.length;j++){
                if(arr2[i]===arr2[j]){
                    arr2.splice(j, 1); 
                    j--;
                }
        }
    }
    return arr2

}
console.log('o(n^2)');
console.log(spliceDelete(arr2));