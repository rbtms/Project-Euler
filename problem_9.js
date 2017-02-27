/*************************************************************************************
* Project euler 9
*
* Title   : Special Pythagorean triplet
*
* Problem : There exists exactly one Pythagorean triplet for which a + b + c = 1000.
*           Find the product abc.
*
* URL     : https://projecteuler.net/problem=9
*
*************************************************************************************/

var a, b, c;
var sum;
var result;

A:
for(a = 1; a < 1000; a++)
    {
        B:
        for(b = a+1; b < 1000; b++)
            {
                C:
                for(c = b+1; c < 1000; c++)
                    {
                        sum = a+b+c;
                        
                        if(sum > 1000)
                            {
                                break;
                            }
                        else if(sum == 1000 && Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2))
                            {
                                result = a*b*c;
                                break A;
                            }
                    }
            }
    }

console.log(result);