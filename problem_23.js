/*******************
* Project euler 23
*******************/
var math = require('./lib/math.js');

const LIMIT  = 28123;


function arr_contains(arr, n)
    {
        for(var m = 0; m < arr.length; m++)
            {
                if(arr[m] == n) { return true; }
            }

        return false;
    }

function is_abundant(n)
    {
        return math.array_sum( math.proper_divisors(n) ) > n;
    }


/***************************
* Get all abundant numbers
***************************/
var abundant = {};

for(var n = 0; n < LIMIT; n++)
    {
        if( is_abundant(n) )
            {
                abundant[n] = true;
            }
    }


/********************************************************************************
* Sum all the numbers which can't be written as the sum of two abundant numbers
********************************************************************************/
var result = 0;

N_LOOP:
for(var n = 1; n < LIMIT; n++)
    {
        for(var m in abundant)
            {
                if     ( n < m )         { break; }
                else if( abundant[n-m] ) { continue N_LOOP; }
            }

        result += n;
    }


console.log(result);