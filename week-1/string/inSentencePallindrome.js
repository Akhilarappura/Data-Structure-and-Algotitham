
function isPalindrome(word) {
    const cleanWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Check if the word is equal to its reverse
    return cleanWord == cleanWord.split('').reverse().join('');
}

function findPalindromeWords(sentence) {
    const words = sentence.split(' '); // Split sentence into words
    const palindromeWords = [];

    for (const word of words) {
        if (isPalindrome(word)) {
            palindromeWords.push(word);
        }
    }

    return palindromeWords;
}

// Example usage:
const sentence = "hello madam madam i'm adam";
const palindromeWords = findPalindromeWords(sentence);
console.log( palindromeWords);
