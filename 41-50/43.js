/******************************************************************************
* Project euler 43
*
* Title   : Sub-string divisibility
* Problem : Find the sum of all 0 to 9 pandigital numbers with this property.
* URL     : https://projecteuler.net/problem=43
*
******************************************************************************/

var math = require('./lib/math.js');


var result = 0;


function get_n_pandigital(n, i, n_arr)
    {
        if(i == n)
            {
                if(
                    n_arr[0] != 0 &&
                    (n_arr[1].toString() + n_arr[2].toString() + n_arr[3].toString()) % 2  == 0 &&
                    (n_arr[2].toString() + n_arr[3].toString() + n_arr[4].toString()) % 3  == 0 &&
                    (n_arr[3].toString() + n_arr[4].toString() + n_arr[5].toString()) % 5  == 0 &&
                    (n_arr[4].toString() + n_arr[5].toString() + n_arr[6].toString()) % 7  == 0 &&
                    (n_arr[5].toString() + n_arr[6].toString() + n_arr[7].toString()) % 11 == 0 &&
                    (n_arr[6].toString() + n_arr[7].toString() + n_arr[8].toString()) % 13 == 0 &&
                    (n_arr[7].toString() + n_arr[8].toString() + n_arr[9].toString()) % 17 == 0
                  )
                    {
                        result += parseInt(n_arr.join(''));
                    }
                
                return;
            }

        
        J_LOOP:
        for(var j = 0; j < 10; j++)
            {
                /***************************
                * Discard repeated numbers
                ***************************/
                for(var k = 0; k < i; k++)
                    {
                        if(j == n_arr[k]) { continue J_LOOP; }
                    }

                n_arr[i] = j;
                
                get_n_pandigital(n, i+1, n_arr);
            }
    }


get_n_pandigital(10, 0, []);

console.log(result);