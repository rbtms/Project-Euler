/***********************************************************
* Project euler 27
*
* Title   : Quadratic primes
*
* Problem : Find the product of the coefficients, a and b,
*           for the quadratic expression that produces
*           the maximum number of primes for consecutive
*           values of n, starting with n=0.
*
* URL     : https://projecteuler.net/problem=27
*
***********************************************************/

var math = require('./lib/math.js');


function get_p_length(a, b)
    {
        var length = 0;
        
        for(var n = 0; math.is_prime( Math.abs(Math.pow(n, 2) + n*a + b )); n++)
            {
                length++;
            }

        return length;
    }


var result     = 0;
var res_length = 0;

for(var a = -999; a < 1000; a++)
    {
        for(var b = -1000; b <= 1000; b++)
            {
                var length = get_p_length(a, b);
                
                if(length >= res_length)
                    {
                        res_length = length;                        
                        result     = a * b;
                    }
            }
    }

console.log(result);