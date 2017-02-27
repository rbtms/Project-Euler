/******************************************************************
* Project euler 5
*
* Title   : Smallest multiple
*
* Problem : What is the smallest positive number that is evenly
*           divisible by all of the numbers from 1 to 20?
*
* URL     : https://projecteuler.net/problem=5
*
******************************************************************/

function is_divisible(n)
    {
        for(var m = 11; m <= 20; m++)
            {
                if(n % m != 0) { return false; }
            }

        return true;
    }


var n = 1;
while( !is_divisible(n) ) { n++; }

console.log(n);