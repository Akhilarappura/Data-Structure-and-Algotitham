

let str = 'hello world'

let reverse =(str,elem)=>{


    if(elem<=str.length){
        let letter = str[str.length-elem]
        return letter + reverse(str,elem+1)
    }else{
        return ''
    }


}
console.log(reverse(str,1));