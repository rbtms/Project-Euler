/**********************************************************************************
* Project euler 63
*
* Title   : Powerful digit counts
*
* Problem : How many n-digit positive integers exist which are also an nth power?
*
* URL     : https://projecteuler.net/problem=63
*
***********************************************************************************/
var math = require('mathjs');

math.config
    ({
        precision: 2000
    });


for(var pow = 1;; pow++)
    {
        for(var i = 1;; i++)
            {
                var n = math.bignumber(i);
                n     = n.pow(pow).d.join('');
                
                var len = parseFloat(parseFloat(n).toPrecision(10)).toString().length;
                
                if(len == pow)
                    {
                        console.log(n, len, pow);
                    }
                else if(len > pow)
                    {
                        break;
                    }
            }
    }