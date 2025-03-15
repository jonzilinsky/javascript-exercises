const repeatString = function(string,num) {
    if (num == 0) {
        return '';
    } else if (num < 0) {
        return 'ERROR';
    } else { 
        let sstring = string; 
        for (let i = 1; i < num; i++) {
            sstring = sstring + string    
        }
        return sstring; 
    }
}


console.log(repeatString('123',3))



// Do not edit below this line
module.exports = repeatString;
