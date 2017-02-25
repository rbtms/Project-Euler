/******************
* Project euler 5
******************/
function is_divisible(n)
    {
        for(var m = 11; m <= 20; m++)
            {
                if(n % m != 0) { return false; }
            }

        return true;
    }


var n = 1;
while( !is_divisible(n) ) { n++; }

console.log(n);