/**********************************************************
* Project euler 34
*
* Title   : Digit factorials
*
* Problem : Find the sum of all numbers which are equal
*           to the sum of the factorial of their digits.
*
* URL     : https://projecteuler.net/problem=34
*
**********************************************************/

function factorial(n)
    {
        if(n == 0) { return 1; }
        
        var result = 1;
        
        for(var m = 1; m <= n; m++)
            {
                result *= m;
            }

        return result;
    }


var result = 0;
    
for(var n = 3; n < 100000; n++)
    {
        var sum   = 0;
        var n_str = n.toString();
        
        for(var i = 0; i < n_str.length; i++)
            {
                sum += factorial(n_str[i]);
            }

        if(n == sum) { result += n; }
    }    


console.log(result);