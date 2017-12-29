/********************************************************************
* Project euler 53
*
* Title   : Combinatoric selections
*
* Problem : How many, not necessarily distinct, values of nCr, for
*           1 ≤ n ≤ 100, are greater than one-million?
*
* URL     : https://projecteuler.net/problem=53
*
********************************************************************/

var mathjs = require('mathjs');

function C(n, r)
    {
        return mathjs.factorial(n) / ( mathjs.factorial(r)*mathjs.factorial(n-r) );
    }


var result = 0;

for(var n = 1; n <= 100; n++)
    {
        for(var r = 0; r <= n; r++)
            {
                if( C(n, r) >= 1000000 ) { result++; }
            }
    }


console.log(result);