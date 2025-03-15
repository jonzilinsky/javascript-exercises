const reverseString = function(someString) {
    let someArray = someString.split("");    
    let someReverse = someArray.reverse(); 
    let someJoin = someReverse.join(''); 
    return someJoin; 





};

console.log(reverseString('Hello there'))

// Do not edit below this line
module.exports = reverseString;
