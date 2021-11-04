/****************************************************
* Project euler 48
*
* Title   : Self powers
*
* Problem : Find the last ten digits of the series,
*           1**1 + 2**2 + 3**3 + ... + 1000**1000.
*
* URL     : https://projecteuler.net/problem=48
*
****************************************************/

var mathjs = require('mathjs');

mathjs.config
    ({
        precision: 3000
    });


var result = mathjs.bignumber(0);

for(var n = 1; n <= 1000; n++)
    {
        var n_bignum = mathjs.bignumber(n).pow(n);
        result       = mathjs.add( result, n_bignum );
    }

result = result.d.join('').substr(-10);

console.log(result);