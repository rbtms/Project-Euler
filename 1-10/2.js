/********************************************************************************
* Project euler 2
*
* Title   : Even Fibonacci numbers
*
* Problem : By considering the terms in the Fibonacci sequence whose values
*            do not exceed four million, find the sum of the even-valued terms.
*
* URL     : https://projecteuler.net/problem=2
*
********************************************************************************/

var result = 0;

function fib(a, b)
    {
        if     (a > 4000000) { return; }
        else if(a % 2 == 0)  { result += a; }
        
        fib(a+b, a);
    }
    

fib(1, 1, 0);

console.log(result);
