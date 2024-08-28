function isPalindrome(word) {
    if (word.length <= 1) {
      return true;
    }
    
    if (word[0] !== word[word.length - 1]) {
      return false;
    }
    
    return isPalindrome(word.substring(1, word.length-1));
  }
  
  // Example usage:
  let sentence = ['hello', 'madam', 'hai'];
  sentence.forEach(word => {
    if (isPalindrome(word)) {
      console.log(word);
    } 
  });
  