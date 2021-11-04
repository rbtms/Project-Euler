/**************************************************************
* Project euler 10
*
* Title   : Summation of primes
* Problem : Find the sum of all the primes below two million.
* URL     : https://projecteuler.net/problem=10
*
**************************************************************/
function is_prime(p)
    {
        if(p % 2 == 0 || p % 3 == 0 || p % 5 == 0 || p % 7 == 0) { return false; }
        
        var root = Math.ceil(Math.sqrt(p));
        for(var n = 11; n <= root; n++)
            {
                if(p % n == 0) { return false; }
            }

        return true;
    }

function prime_sum(n)
    {
        var result = 2 + 3 + 5 + 7;
        
        for(var p = 11; p < n; p++)
            {
                if( is_prime(p) ) { result += p; }
            }

        return result;
    }


var sum = prime_sum(2000000);

console.log(sum);