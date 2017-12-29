/***************************************************************************
* Project euler 56
*
* Title   : Powerful digit sum
*
* Problem : Considering natural numbers of the form, ab, where a, b < 100,
*           what is the maximum digital sum?
*
* URL     : https://projecteuler.net/problem=56
*
***************************************************************************/

var mathjs = require('mathjs');

mathjs.config
    ({
        precision: 1000
    });



var result = 0;

for(var n = 0; n < 100; n++)
    {
        for(var m = 0; m < 100; m++)
            {
                var pow = mathjs.pow
                    (
                        mathjs.bignumber(n),
                        mathjs.bignumber(m)
                    );
                
                var sum = mathjs.sum( pow.d.join('').split('') );
                
                if(sum > result) { result = sum; }
            }
    }


console.log(result);