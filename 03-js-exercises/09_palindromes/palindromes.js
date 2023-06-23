const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let len = string.length;
    for (let i=0; i<Math.floor(len/2); i++){
        console.log(string[i], string[len-1-i]);
        if (string[i] !== string[len-1-i]) {return false}
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
