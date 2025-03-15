const removeFromArray = function(someArray, ...someArgs) {
    let newArray = []
    for (const i of someArray) {
        if (someArgs.includes(i)) {
        } else {
            newArray.push(i);
        }
    };
    return (newArray);




};


// Do not edit below this line
module.exports = removeFromArray;
