/***********************************************************
* Project euler 71
*
* Title   : Ordered fractions
*
* Problem : By listing the set of reduced proper fractions
*           for d ≤ 1,000,000 in ascending order of size,
*           find the numerator of the fraction immediately
*           to the left of 3/7.
*
* URL     : https://projecteuler.net/problem=71
*
***********************************************************/
var math   = require('./lib/math.js');
var mathjs = require('mathjs');


var target = 3/7;

var res_n = 3;
var res_d = 10;
var res   = target - res_n / res_d;


/*************************
* Results keep a pattern
*************************/
var series   = [0, 7, 4, 1, 8, 5, 2, 9, 6, 3];


var d, n;
for(d = 999990; d <= 1000000; d++)
    {
        /**********************************
        * n/d < target implies that n < d
        **********************************/
        for(n = 1; n/d < target; n++)
            {
                /***************
                * Simple sieve
                ***************/
                if((n%2 == 0 && d%2 == 0) || (n%3 == 0 && d%3 == 0) || (n%5 == 0 && d%5 == 0)) { continue; }
                
                if( math.are_coprimes(n, d) )
                    {
                        if( target - n / d < res )
                            {
                                res_n = n;
                                res_d = d;
                                res   = target - res_n/res_d;
                            }
                    }
            }
    }


console.log('Result', res_n, res_d);