




let reversePrefix = function(word, ch) {

    let index = word.indexOf(ch)
    let newWord =  word.substring(0,index+1).split('').reverse().join().replace(/,/g,"")
    return newWord + word.substring(index+1)
};

let word = "abcdefd", ch = "d";

let res = reversePrefix(word,ch)
console.log(res);  // abcd efd  ==>  dcba efd