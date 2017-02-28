/*****************************************************************
* Project euler 37
*
* Title   : Truncatable primes
*
* Problem : Find the sum of the only eleven primes that are both
*           truncatable from left to right and right to left.
*
* URL     : https://projecteuler.net/problem=37
*
*****************************************************************/

var math = require('./lib/math.js');


var result = 0;

N_LOOP:
for(var n = 10; n < 1000000; n++)
    {
        var n_str = n.toString();
        
        for(var i = 0, len = n_str.length; i < len; i++)
            {
                if(
                    !math.is_prime( n_str.substr(i, len)   ) ||
                    !math.is_prime( n_str.substr(0, len-i) )
                  )
                    {
                        continue N_LOOP;
                    }
            }

        result += n;
    }


console.log(result);