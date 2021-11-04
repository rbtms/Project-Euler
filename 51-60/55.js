/*******************************************************************
* Project euler 55
*
* Title   : Lychrel numbers
* Problem : How many Lychrel numbers are there below ten-thousand?
* URL     : https://projecteuler.net/problem=55
*
*******************************************************************/

function reverse(n)
    {
        var n_str   = n.toString();
        var len     = n_str.length;
        var reverse = '';
        
        for(var i = 0; i < len; i++)
            {
                reverse += n_str[len-i-1];
            }
            
        
        return parseInt(reverse);
    }

function is_palindrome(n)
    {
        var n_str = n.toString();
        var len   = n_str.length;
        
        for(var i = 0; i < len; i++)
            {
                if( n_str[i] != n_str[len-i-1] ) { return false; }
            }

        
        return true;
    }


var result = 10000;

for(var n = 0; n < 10000; n++)
    {
        var m = n;
        
        for(var i = 0; i < 50; i++)
            {
                m += reverse(m);
                
                if(is_palindrome(m))
                    {
                        result--;
                        break;
                    }
            }
    }

console.log(result);