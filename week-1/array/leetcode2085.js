


let words1 = ["leetcode","is","amazing","as","is"];
let words2 = ["amazing","leetcode","is"];

let countOccurs = (words1, words2)=>{
    let count =0;

    let longArr2 = (words1.length>=words2.length)?words1:words2
    let shortArr = (words1.length>words2.length)?words2:words1
    let longArr = new Set(longArr2)
    console.log(longArr);
    for(i=0;i<longArr.size;i++){
        if(longArr.has(shortArr[i])){    
            count++;
        }
    }
    return count ;
}

let res = countOccurs(words1,words2)
console.log(res);

