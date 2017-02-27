/**********************************************************************************
* Euler project 14
*
* Title   : Longest Collatz sequence
* Problem : Which starting number, under one million, produces the longest chain?
* URL     : https://projecteuler.net/problem=14
*
**********************************************************************************/

function collatz(n)
    {
        return n%2 == 0 ? n/2 : 3*n+1;
    }

function collatz_length(n)
    {
        /****************************
        * Starting and ending terms
        ****************************/
        var length = 2;
        
        while( collatz(n) != 1 )
            {
                n = collatz(n);
                length++;
            }

        return length;
    }


var res_n;
var res_length = 0;

for(var n = 1; n < 1000000; n++)
    {
        var length = collatz_length(n);
        
        if(length > res_length)
            {
                res_n      = n;
                res_length = length;
            }
    }


console.log(res_n, res_length);