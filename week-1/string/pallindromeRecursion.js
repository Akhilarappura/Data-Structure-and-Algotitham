let str = "madam"

let pallindrome =(str)=>{

  if(str.length<=1){
    return true
  }
  if(str[0]===str[str.length-1]){
    return pallindrome(str.substring(1,str.length-1))
  }
  else{
    return false
  }
}


console.log(pallindrome(str,str.length-1));