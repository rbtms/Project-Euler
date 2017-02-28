/******************************************************************
* Project euler 35
*
* Title   : Circular primes
* Problem : How many circular primes are there below one million?
* URL     : https://projecteuler.net/problem=35
*
******************************************************************/

var math = require('./lib/math.js');


var result = 0;

N_LOOP:
for(var n = 2; n < 1000000; n++)
    {
        if( !math.is_prime(n) ) { continue; }
        
        var n_str = n.toString();
        
        for(var i = 0; i < n_str.length; i++)
            {
                n_str = n_str.substr(1)+n_str[0];
                
                if( !math.is_prime(n_str) ) { continue N_LOOP; }
            }

        result++;
    }


console.log(result);