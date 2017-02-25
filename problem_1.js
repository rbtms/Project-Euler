/******************
* Project euler 1
******************/
var result = 0;

for(var n = 0; n < 1000; n++)
    {
        if(n % 3 == 0 || n % 5 == 0) { result += n; }
    }

console.log(result);