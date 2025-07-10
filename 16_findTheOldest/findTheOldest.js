
const findTheOldest = function(p) {

    let addedAge = p.map(addAge);
    function addAge(a){

        if (a.yearOfDeath === undefined ){
            const time = new Date();
            a.yearOfDeath = time.getFullYear();
        }
        return {name: a.name, yearOfBirth: a.yearOfBirth, yearOfDeath: a.yearOfDeath, age: (a.yearOfDeath - a.yearOfBirth)}

    }
    let max = addedAge.reduce((property, value) => (property = property > value.age ? property: value.age), 0);    
    let oldest =  addedAge.find((item) => item.age == max);

    return oldest
};



// Do not edit below this line
module.exports = findTheOldest;
