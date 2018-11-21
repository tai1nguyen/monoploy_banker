/**
 * Global filter methods.
 * 
 * @author Tai Nguyen
 * @date 11/20/2018
 */

export const UTILITIES = {
    /**
     * Format the provided integer into a USD string.
     * @param {integer} [num]
     * @returns {String}
     */
    formatDollar: function(num)
    {
        var p = num.toFixed(2).split(".");

        return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
            return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") + "." + p[1];
    }
};