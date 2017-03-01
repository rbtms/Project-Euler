/***********************************************************************
* Project euler 44
*
* Title   : Pentagon numbers
*
* Problem : Find the pair of pentagonal numbers, Pn and Pm, for which
*           their sum and difference are pentagonal and D = |Pn − Pm|
*           is minimised; what is the value of D?
*
* URL     : https://projecteuler.net/problem=44
*
***********************************************************************/

const len = 10000;


var P      = []; // For iterating
var P_hash = {}; // For key searching

for(var n = 1; n <= len; n++)
    {
        P.push( n*(3*n-1)/2 );
        P_hash[ n*(3*n-1)/2 ] = true;
    }


var result = 0;

for(var n = 0; n < len; n++)
    {        
        for(var m = 0; P[m] < P[n]; m++)
            {
                if( P_hash[ P[n]+P[m] ] && P_hash[ P[n]-P[m] ] )
                    {
                        result = P[n]-P[m];
                    }
            }
    }


console.log(result);