/****************************************************************
* Project euler 36
*
* Title   : Double-base palindromes
*
* Problem : Find the sum of all numbers, less than one million,
*           which are palindromic in base 10 and base 2.
*
* URL     : https://projecteuler.net/problem=36
*
****************************************************************/

function reverse(str)
    {
        return str.split('').reverse().join('');
    }

function is_palindrome(str)
    {
        var len = str.length;
        
        return len % 2 == 0 ?
            str.substr(0, len/2)             == reverse( str.substr(len/2) ) :
            str.substr(0, Math.floor(len/2)) == reverse( str.substr(Math.ceil(len/2)) );
    }


var result = 0;

for(var n = 0; n < 1000000; n++)
    {
        var n_str = n.toString();
        
        if( is_palindrome(n_str) )
            {
                var n_bin = n.toString(2);
                
                if( is_palindrome(n_bin) )
                    {
                        result += n;
                    }
            }
    }

console.log(result);