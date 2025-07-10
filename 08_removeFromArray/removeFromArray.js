const removeFromArray = function(array, ...argument) {
    let removed = [];
    for (let i = 0; i < array.length; i++){
        let argdel = false;
        for(let j = 0; j < argument.length; j++){
            if (array[i] === argument[j]){
                argdel = true;
                
            }    
        }
        if (argdel === false){
            removed.push(array[i]);    
        }
        
                console.log(removed);
                console.log(argument.length)
    }
    return removed;
};

console.log(removeFromArray([1,2,3,4], 3, 1));
// Do not edit below this line
module.exports = removeFromArray;
