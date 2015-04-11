
var mod = {
    /*
    1.1

    Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
    */
    checkStringUnique: function (str) {
        var i;
        if (!str.length) {
            //if the string is empty or doesn't have a "length" property (not a string)
            return false;
        }
        for (i = 0; i < str.length; i++) {
            for (j = i+1; j < str.length ; j++) {
                if (str[i] === str[j]) {
                    return false;
                }
            }
        }
        return true;
    }
};


module.exports = mod;