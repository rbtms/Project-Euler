/*********************************************************************
* Project euler 57
*
* Title   : Square root convergents
*
* Problem : In the first one-thousand expansions, how many fractions
*           contain a numerator with more digits than denominator?
*
* URL     : https://projecteuler.net/problem=57
*
**********************************************************************/
var mathjs = require('mathjs');


mathjs.config
    ({
        precision: 2000
    });


var a = mathjs.bignumber(1);
var b = mathjs.bignumber(2);
var c;

var len_a, len_b, len_c;

var result = 0;

for(var i = 0; i < 1000; i++)
    {
        a = a.add(b).add(b); // add 2
        [a, b] = [b, a];     // 1 / (a/b)
        
        c = a.add(b); // add 1
        
        len_b = b.d.join('').length;
        len_c = c.d.join('').length;
        
        
        if(len_c > len_b) { result++; }
    }

console.log(result);