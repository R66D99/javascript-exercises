const sumAll = function(f, s) {
    let sumAll = 0;
    if (f >= 0 && f % 1 === 0 &&
         s % 1 === 0 &&
        (typeof f) === "number" &&
        (typeof s) === "number" ){
        if (f < s){
            for (let i = f; i <= s; i++){
            sumAll += i;
            };      
        };
         if (f > s){
            for (let i = s; i <= f; i++){
            sumAll += i;
            };      
        };
    return sumAll;               
    }
    else {
        return "ERROR";
    };

};

// Do not edit below this line
module.exports = sumAll;
