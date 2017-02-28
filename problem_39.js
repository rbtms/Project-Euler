/**************************************************************
* Project euler 39
*
* Title   : Integer right triangles
*
* Problem : For which value of n <= 1000 is there the highest
*           number of solutions for its sides ?
*
* URL     : https://projecteuler.net/problem=39
*
**************************************************************/

var result  = 0;
var pos_res = 0;

var p, a, b, c;
var pos;

for(p = 0; p <= 1000; p++)
    {
        pos = 0;
        
        for(a = 0; a < p; a++)
            {
                for(b = 0; b < a; b++)
                    {
                        if(a + b >= p) { break; }
                        
                        c = p-(a+b);
                        
                        if(p == a+b+c && Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2))
                            {
                                pos++;
                            }
                    }
            }

        
        if(pos > pos_res)
            {
                pos_res = pos;
                result  = p;
            }
    }


console.log(result);