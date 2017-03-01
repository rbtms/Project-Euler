/***********************************************************
* Project euler 50
*
* Title   : Consecutive prime sum
*
* Problem : Which prime, below one-million, can be written
*           as the sum of the most consecutive primes?
*
* URL     : https://projecteuler.net/problem=50
*
***********************************************************/

var math = require('./lib/math.js');


var P      = [];
var P_hash = {};

/*******************************
* Get all primes below 1000000
*******************************/
for(var n = 1; n < 1000000; n++)
    {
        if( math.is_prime(n) )
            {
                P.push(n);
                P_hash[n] = true;
            }
    }


var len = P.length;
var result;
var p_n_res = 0;

for(var i = 0; i < len; i++)
    {
        var sum = 0;
        
        var p   = 0;
        var p_n = 0;
        
        for(var j = 0; i+j < len && sum < 1000000; j++)
            {
                sum += P[i+j];
                
                if(P_hash[sum])
                    {
                        p_n = j;
                        p   = sum;
                    }
            }

        if(p_n > p_n_res)
            {
                p_n_res = p_n;
                result  = p;
            }
    }


console.log(result);