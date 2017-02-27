/****************************************************************
* Project euler 30
*
* Title   : Digit fifth powers
*
* Problem : Find the sum of all the numbers that can be written
*           as the sum of fifth powers of their digits.
*
* URL     : https://projecteuler.net/problem=30
*
****************************************************************/

var m, n_str;
var result = 0;

for(var n = 2; n < 1000000; n++)
    {
        n_str = n.toString();
        m     = 0;
        
        for(var i = 0; i < n_str.length; i++)
            {
                m += Math.pow( n_str[i], 5 );
            }
        
        if(n == m)
            {
                result += m;
            }
    }


console.log(result);