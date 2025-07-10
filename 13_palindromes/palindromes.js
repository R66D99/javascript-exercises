const palindromes = function (s) {
    let strPalindrome = s.replaceAll(/[^\w]/gi,'').toLowerCase();
    let strPalindromeReversed = '';
    for (let i = 0; i < strPalindrome.length; i++){
        strPalindromeReversed += strPalindrome[strPalindrome.length - 1 - i]; 
    }
    if (strPalindrome === strPalindromeReversed){
        return true;
    }
    else{
        return false;
    };

};
// Do not edit below this line
module.exports = palindromes;
