const sumAll = function(first, second) {
    const theArray = [];
    let theResult = 0;
    if (first % 1 != 0 || second % 1 != 0) {
        return 'ERROR';
    } else if (first > 0 && second > 0) {
        if (second > first) {
            for (let i = first; i <= second; i++) {
                theArray.push(i);
            }
            for (const i of theArray) {
                theResult = theResult + i;
            }
            return theResult;
        } else {
            for (let i = second; i <= first; i++) {
                theArray.push(i);
            }
            for (const i of theArray) {
                theResult = theResult + i;
            }
            return theResult;
            }
    } else {
        return 'ERROR';
    }
};

console.log(sumAll(1,2))

// Do not edit below this line
module.exports = sumAll;
