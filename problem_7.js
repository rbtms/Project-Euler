/******************
* Project euler 7
******************/

function is_prime(p)
    {
        if(p % 2 == 0 || p % 3 == 0 || p % 5 == 0 || p % 7 == 0) { return false; }
        
        var root = Math.ceil(Math.sqrt(p));
        for(var n = 11; n <= root; n++)
            {
                if(p % n == 0) { return false; }
            }

        return true;
    }

function n_prime(n)
    {
        /******************
        * Skip 2, 3, 5, 7
        ******************/
        var prime_n = 4;
        var p       = 11;

        for(; prime_n < n; p++)
            {
                if( is_prime(p) ) { prime_n++; }
            }

        return p-1; //// Why does it increment on the last iteration?
    }


var n = n_prime(10001);
console.log(n);