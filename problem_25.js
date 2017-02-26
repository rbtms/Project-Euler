/*******************
* Project euler 25
*******************/
var math = require('./lib/math.js');


function big_fib(a, b, n)
    {
        if(a.length >= 1000) { return n; }
        
        return big_fib( math.sum_big_int(a, b), a, ++n );
    }


var result = big_fib('1', '1', 2);

console.log(result);