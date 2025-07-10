const fibonacci = function(n) {
    if(n < 0){
        return "OOPS";
    };
    let fibonacciF = 1;
    let fibonacciS = 0;
    let fibonacciLocked = 0;
    let place = 0;
    while (place < n){
        fibonacciF += fibonacciS;
        fibonacciLocked = fibonacciF;
        place ++;
        if(place < n){
        fibonacciS += fibonacciF;
        fibonacciLocked = fibonacciS;
        place ++;    
        }
    }
    return fibonacciLocked;
};
// Do not edit below this line
module.exports = fibonacci;
