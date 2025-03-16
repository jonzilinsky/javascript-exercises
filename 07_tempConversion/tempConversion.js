const convertToCelsius = function(fahNumber) {
    result = (fahNumber - 32) * 5 / 9;
    result = Math.round(result * 10) / 10 
    return result;

};

const convertToFahrenheit = function(celNumber) {
    result = celNumber * 9 / 5 + 32;
    result = Math.round(result * 10) / 10 
    return result;

};

/* console.log(convertToCelsius(89));
   console.log(convertToFahrenheit(32)); */

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
