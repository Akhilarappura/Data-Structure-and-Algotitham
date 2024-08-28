function bubble(sort){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<sort.length-1;i++){
            if(sort[i]>sort[i+1]){
            let temp=sort[i];
            sort[i]=sort[i+1];
            sort[i+1]=temp;
            swapped=true;
        }
    }

    }while(swapped)
}


const arr=[5,6,7,4,3,2,8,1,1-1];
bubble(arr);
console.log((arr));


