/**********************************************************************
* Project euler 38
*
* Title   : Pandigital multiples
*
* Problem : What is the largest 1 to 9 pandigital 9-digit number that
*           can be formed as the concatenated product of an integer
*           with (1,2, ... , n) where n > 1?
*
* URL     : https://projecteuler.net/problem=38
*
**********************************************************************/

var math = require('./lib/math.js');


var result = 0;

for(var n = 0; n < 10000; n++)
    {
        var res_n = '';
        for(var i = 1; res_n.length <= 9 ; i++)
            {
                res_n += (n*i).toString();
                
                if(res_n.length == 9)
                    {
                        if( math.is_pandigital(res_n) && res_n > result)
                            {
                                result = res_n;
                            }
                    }
            }
    }


console.log(result);