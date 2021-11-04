/******************************************************************
* Project euler 29
*
* Title   : Distinct powers
*
* Problem : How many distinct terms are in the sequence generated
*           by ab for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
*
* URL     : https://projecteuler.net/problem=29
*
******************************************************************/

var mathjs = require('mathjs');

mathjs.config
    ({
        number   : 'BigNumber',
        precision: 64
    });


var n = {};

for(var i = 2; i <= 100; i++)
    {
        var a = mathjs.bignumber(i);
        
        for(var b = 2; b <= 100; b++)
            {
                n[a.pow(b)] = true;
            }
    }


var result = 0;
for(var key in n) { result++; }

console.log(result);