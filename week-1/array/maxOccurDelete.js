let arr= [1,1,2,4,4,1,2,3,1,4,4,1,4];

let maxoccur =(arr)=>{

    let max =0;
    let elem ;
    for(let i=0;i<arr.length;i++){
        let count =0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++
            }
            if(count>max){
                max =count;
                elem=arr[i]
            }

        }
    }

    
    // return {elem,max}

  let i=0;
  while(i< arr.length){
    if(arr[i]===elem){
        arr.splice(i,1);
    }else{
        i++;
    }
  }
  return arr
}

console.log(maxoccur(arr));
// let filteredArr = arr.filter(item => item !== elem);
