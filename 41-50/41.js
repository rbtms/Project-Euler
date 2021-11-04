/**********************************************************************
* Project euler 41
*
* Title   : Pandigital prime
* Problem : What is the largest n-digit pandigital prime that exists?
* URL     : https://projecteuler.net/problem=41
*
**********************************************************************/

var math = require('./lib/math.js');


/****************************************************************************
* 8-length pandigitals have a sum of 36, which means they are multiple of 3
* No 9-length pandigital is prime
* Therefore it is a 7-size pandigital number
****************************************************************************/
const LIMIT = 10000000;


var result = 0;

N_LOOP:
for(var n = 1; n < LIMIT; n += 2)
    {
        if( math.is_pandigital( n.toString() ) && math.is_prime(n) )
            {
                result = n;
            }
    }

console.log(result);