const reverseString = function(s) {
    let rString = "";
    for (let i = s.length; i > 0; i--){
        rString += s[i-1];
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;
