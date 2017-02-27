/******************************************************************************
* Project euler 6
*
* Title   : Sum square difference
*
* Problem : Find the difference between the sum of the squares of the first
*           one hundred natural numbers and the square of the sum.
*
* URL     : https://projecteuler.net/problem=6
*
******************************************************************************/

function sum_square(n)
    {
        var result = 0;
        
        for(var m = 1; m <= n; m++)
            {
                result += Math.pow(m, 2);
            }

        return result;
    }

function square_sum(n)
    {
        var result = 0;
        
        for(var m = 1; m <= n; m++)
            {
                result += m;
            }

        return Math.pow(result, 2);
    }


var result = square_sum(100) - sum_square(100);
console.log(result);