/*********************************************************
* Project euler 58
*
* Title   : Spiral primes
*
* Problem : What is the side length of the square spiral
*           for which the ratio of primes along both
*           diagonals first falls below 10%?
*
* URL     : https://projecteuler.net/problem=58
*
*********************************************************/

var math = require('./lib/math.js');


var n   = 1;
var p_n = 0;

MAIN_LOOP:
for(var i = 1, length = 2;; i++, length += 2)
    {
        for(var j = 0; j < 4; j++)
            {
                n += length;
                if(math.is_prime(n)) { p_n++; }
            }
                
        
        var total = i*4+1;
                
        if(total / p_n > 10.0)
            {
                console.log(length+1);
                
                break MAIN_LOOP;
            }
    }