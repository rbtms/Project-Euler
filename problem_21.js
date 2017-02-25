/*******************
* Project euler 21
*******************/

function proper_divisors(n)
    {
        var half   = Math.ceil(n/2);
        var result = [];
        
        for(var m = 0; m <= half; m++)
            {
                if(n%m == 0) { result.push(m); }
            }

        return result;
    }

function array_sum(arr)
    {
        var result = 0;
        
        for(var n = 0; n < arr.length; n++) { result += arr[n]; }
        
        return result;
    }


var result = [];

for(var n = 0; n < 10000; n++)
    {
        var sum = array_sum(proper_divisors(n));
        var m   = array_sum(proper_divisors(sum));
        
        if(sum != m && n == m) { result.push(n); }
    }


result = array_sum(result);

console.log(result);