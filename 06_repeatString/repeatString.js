const repeatString = function(s, r) {
    let repeated = "";
    if (r >= 0){
        for (let i = 0; i < r; i++){
                repeated = repeated + s
            };
    }
    else {
        return "ERROR";
    };
    
   return repeated;

};

// Do not edit below this line
module.exports = repeatString;
