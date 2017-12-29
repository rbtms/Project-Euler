/*********************************************************************************
* Project euler 69
*
* Title   : Totient maximum
* Problem : Find the value of n ≤ 1,000,000 for which n/totient(n) is a maximum.
* URL     : https://projecteuler.net/problem=69
*
*********************************************************************************/
var math = require('./lib/math.js');


var res     = 0;
var res_div = 0;

N:
for(var n = 2; n <= 1000000; n++)
    {
        /***********************
        * Guess by observation
        ***********************/
        if(n % 10 != 0 || n % 5 != 0 || n % 3 != 0 || n % 2 != 0) { continue; }
        
        
        var coprime_n = 0;
        
        for(var m = 1; m < n; m++)
            {
                /*******************************************
                * Reduce the set by removing small factors
                *******************************************/
                if((n % 2 == 0 && m % 2 == 0) || (n%3 == 0 && m % 3 == 0)) { continue; }
                
                
                if( math.are_coprimes(n, m) ) { coprime_n++; }
                
                
                /****************************************************
                * As coprime_n grows, div becomes smaller, so there
                * is no point in going on
                ****************************************************/
                if(n/coprime_n < res_div) { continue N; }
            }
        
        
        if(res_div < n/coprime_n) { [res, res_div] = [n, n/coprime_n]; }
    }

console.log('Result:', res, res_div);