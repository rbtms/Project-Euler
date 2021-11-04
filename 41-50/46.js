/***************************************************************
* Project euler 46
*
* Title   : Goldbach's other conjecture
*
* Problem : What is the smallest odd composite that cannot be
*           written as the sum of a prime and twice a square?
*
* URL     : https://projecteuler.net/problem=46
*
***************************************************************/

var math = require('./lib/math.js');


var result = 0;

N_LOOP:
for(var n = 11; n < 10000; n += 2)
    {
        if( math.is_prime(n) ) { continue; }
        
        for(var p = 1; p < n; p++)
            {
                /**********************************************
                * n               = p + 2*(k**2) <=>
                * n-p             = 2*(k**2)     <=>
                * (n-p)/2         = k**2         <=>
                * sqrt( (n-p)/2 ) = k
                *
                * Which means that sqrt( (n-p)/2 ) has to be
                * an integer for the conjecture to be true
                **********************************************/
                if( !math.is_prime(p) )
                    {
                        continue;
                    }
                else if( Number.isInteger( Math.sqrt( (n-p)/2 ) ) )
                    {
                        continue N_LOOP;
                    }
            }
        
        
        result = n;
        break;
    }


console.log(result);