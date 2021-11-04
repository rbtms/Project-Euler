/***************************************************************************************
* Project euler 4
*
* Title   : Largest palindrome product
* Problem : Find the largest palindrome made from the product of two 3-digit numbers.
* URL     : https://projecteuler.net/problem=4
*
***************************************************************************************/

function reverse_string(str)
    {
        var reverse = '';
        var len     = str.length;
                
        for(var n = 1; n <= len; n++) { reverse += str[len-n]; }
        
        return reverse;
    }


var result = 0;

for(var n = 100; n < 1000; n++)
    {
        for(var m = 100; m < 1000; m++)
            {
                var product = n*m;
                
                if( product == reverse_string(product.toString()) && result < product)
                    {
                        result = product;
                    }
            }
    }

console.log(result);