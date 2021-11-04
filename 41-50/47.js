/*************************************************************
* Project euler 47
*
* Title   : Distinct primes factors
*
* Problem : Find the first four consecutive integers to have
*           four distinct prime factors each.
*           What is the first of these numbers?
*
* URL     : https://projecteuler.net/problem=47
*
*************************************************************/

var math = require('./lib/math.js');


var result = 0;

N_LOOP:
for(var n = 0; n < 1000000; n++)
    {
        for(var i = 0; i < 4; i++)
            {
                var factors = math.factors(n+i);

                var p_n = 0;
                for( var j in factors )
                    {
                        if( math.is_prime( factors[j] ) )
                            {
                                p_n++;
                            }
                    }

                if(p_n < 4) { continue N_LOOP; }
            }
        
        
        result = n;
        break;
    }


console.log(result);