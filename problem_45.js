/***************************************************
* Project euler 45
*
* Title   : Triangular, pentagonal, and hexagonal
*
* Problem : Find the next triangle number to 40755
*           that is also pentagonal and hexagonal.
*
* URL     : https://projecteuler.net/problem=45
*
***************************************************/

const len = 100000;


var T      = [];
var T_hash = {};
var P_hash = {};
var H_hash = {};

for(var n = 1; n <= len; n++)
    {
        T.push( n*(n+1)/2 );
        
        T_hash[ n*(n+1)/2   ] = true;
        P_hash[ n*(3*n-1)/2 ] = true;
        H_hash[ n*(2*n-1)   ] = true;
    }


for(var i = 0; i < len; i++)
    {
        var n = T[i];
        
        if( T_hash[n] && P_hash[n] && H_hash[n] )
            {
                console.log(n);
            }
    }