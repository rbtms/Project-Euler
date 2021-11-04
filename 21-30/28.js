/*************************************************************
* Problem 28
*
* Title   : Number spiral diagonals
*
* Problem : What is the sum of the numbers on the diagonals
*           in a 1001 by 1001 spiral formed in the same way?
*
* URL     : https://projecteuler.net/problem=28
*
*************************************************************/

var result      = 1;
var target_size = 1001;
var last        = 1;


for(var i = 1, size = 2; size < target_size; i++, size += 2)
    {
        for(var j = 0; j < 4; j++)
            {
                last   += 2*i;
                result += last;
            }
    }


console.log(result);