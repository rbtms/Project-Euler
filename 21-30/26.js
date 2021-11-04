/******************************************************************
* Project euler 26
*
* Title   : Reciprocal cycles
*
* Problem : Find the value of d < 1000 for which 1/d contains the
*           longest recurring cycle in its decimal fraction part.
*
* URL     : https://projecteuler.net/problem=26
*
******************************************************************/

var mathjs = require('mathjs');

mathjs.config
    ({
        number   : 'BigNumber',
        precision: 1000000
    });


var result  = 0;
var res_len = 0;

for(var n = 2; n < 1000; n++)
    {
        var fraction = mathjs.bignumber(1)
                        .div(n)
                        .d.join('')
                        .replace(/0+$/, '');
        
        
        var match = fraction.match(/(\d+?)\1/);
        if(match === null) { continue; }
        
        
        if(match[1].length > res_len)
            {
                result  = n;
                res_len = match[1].length;
            }
    }


console.log(result, res_len);