/***********************************************************
* Project euler 12
*
* Title   : Highly divisible triangular number
*
* Problem : What is the value of the first triangle number
*           to have over five hundred divisors?
*
* URL     : https://projecteuler.net/problem=12
*
***********************************************************/

function sum(k)
    {
        var sum = 0;
        
        for(var n = 1; n <= k; n++)
            {
                sum += n;
            }

        return sum;
    }

function divisor_n(n)
    {
        var result = 0;
        
        var root = Math.ceil(Math.sqrt(n));
        for(var m = 1; m <= root; m++)
            {
                if(n % m == 0) { result++; }
            }

        return result*2;
    }


var n = 1;

while(divisor_n(sum(n)) < 500) { n++; }

console.log( sum(n) );