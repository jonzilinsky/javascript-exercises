const leapYears = function(inputYear) {
    if (inputYear % 400 == 0) {
        return true;
    } else if (inputYear % 100 == 0) {
        return false;
    } else if (inputYear % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

/*console.log(leapYears(1600));*/

// Do not edit below this line
module.exports = leapYears;
