/**************************************************************
* Project euler 52
*
* Title   : Permuted multiples
*
* Problem : Find the smallest positive integer, x, such that
*           2x, 3x, 4x, 5x, and 6x, contain the same digits.
*
* URL     : https://projecteuler.net/problem=52
*
**************************************************************/

function has_same_digits(a, b)
    {
        var a_str = a.toString();
        var b_str = b.toString();
        
        if(a.length != b.length) { return false; }
        
        A_LOOP:
        for(var i = 0; i < a_str.length; i++)
            {
                B_LOOP:
                for(var j = 0; j < b_str.length; j++)
                    {
                        if(a_str[i] == b_str[j])
                            {
                                b_str = b_str.substr(0, j) + b_str.substr(j+1);
                                continue A_LOOP;
                            }
                    }
                
                return false;
            }

        return true;
    }


var result = 0;

for(var n = 1; n < 1000000; n++)
    {
        if(
            has_same_digits(n, n*2) &&
            has_same_digits(n, n*3) &&
            has_same_digits(n, n*4) &&
            has_same_digits(n, n*5) &&
            has_same_digits(n, n*6)
          )
          {
              result = n;
              break;
          }
    }


console.log(result);