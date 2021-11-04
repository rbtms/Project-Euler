/****************************************************************************
* Project euler 49
*
* Title   : Prime permutations
*
* Problem : What 12-digit number do you form by concatenating
*           the three terms in the second sequence which:
*
*           1 - Each of the four terms are prime
*           2 - Each of the 4-digit numbers are permutations of one another
*           3 - Is an increasing sequence
*
* URL     : https://projecteuler.net/problem=49
*
****************************************************************************/

var math = require('./lib/math.js');


function sort_int(n)
    {
        return n.toString().split('').sort().join('');
    }


var P = [];
for(var p = 1000; p < 10000; p++)
    {
        if(math.is_prime(p)) { P.push(p) };
    }


var len = P.length;

for(var i = 0; i < len; i++)
    {
        for(var j = i+1; j < len; j++)
            {
                if( math.is_prime(P[j] + P[j]-P[i]) )
                    {
                        var p3 = P[j] + (P[j]-P[i]);
                        
                        if( sort_int(P[i]) == sort_int(P[j]) && sort_int(P[i]) == sort_int(p3) )
                            {
                                result = P[i].toString()+P[j].toString()+p3.toString();
                            }
                    }
            }
    }


console.log(result);