/*********************************************************************
* Project euler 1
*
* Title   : Multiples of 3 and 5
* Problem : Find the sum of all the multiples of 3 or 5 below 1000.
* URL     : https://projecteuler.net/problem=1
*
*********************************************************************/

var result = 0;

for(var n = 0; n < 1000; n++)
    {
        if(n % 3 == 0 || n % 5 == 0) { result += n; }
    }

console.log(result);