

let print=(num)=>{
    if(num<=10){
        console.log(num);
        print(num+1)
    }
}
print(1)