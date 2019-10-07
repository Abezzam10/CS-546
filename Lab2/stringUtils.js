function checkStr(string) {
    if (typeof string != 'string') {
      throw 'The input should be a string!';
    }
  
    if (!string) {
      throw 'Non-existing string';
    }
  
    return string
}
//console.log(checkStr(121332));

function capitalize(string) {
    checkStr(string);
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
// console.log(capitalize('foobar'));
// console.log(capitalize('FOOBAR'));

function repeat (string, num) {
    checkStr(string);
    if (typeof num != 'number' || isNaN(num) || num <= 0) {
        throw 'The input num is not valid!';
    }

    let repeated_string = "";
    while (num  > 0) {
        repeated_string += string;
        num --;
    }
    return repeated_string;
}
// console.log (repeat("abc", 3));
// console.log(repeat('abc', 1));
// console.log(repeat('abc', 0));

function countChars(string) {
    let result = new Object();
    let i = 0;
    while (i <string.length){
      if (result.hasOwnProperty(string.charAt(i))) {
        result[string.charAt(i)]++;
    } else {
        result[string.charAt(i)]=1;
    }
    i++;
    }
    return result;
}
//console.log(countChars('Hello, the pie is in the oven'));


module.exports = {
    capitalize,
    repeat,
    countChars
}