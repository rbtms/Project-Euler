/********************************
* Common mathematical functions
********************************/
var jsonfile = require('jsonfile');


function math()
    {
        this.is_prime         = is_prime;
        this.n_prime          = n_prime;
        this.prime_sum        = prime_sum;
        
        this.primes           = jsonfile.readFileSync('./lib/primes.json');
        
        this.sum              = sum;
        this.divisor_n        = divisor_n;
        
        this.sum_square       = sum_square;
        this.square_sum       = square_sum;
        
        this.n_fib            = n_fib;
        
        this.collatz          = collatz;
        this.collatz_length   = collatz_length;
        
        this.lattice          = lattice;
        this.lattice_fill     = lattice_fill;
        
        this.gcd              = gcd;
        this.are_coprimes     = are_coprimes;
        this.totient          = totient;
        
        this.int_length       = int_length;
        this.remove_last      = remove_last;
        
        this.last_digit       = last_digit;
        this.sum_big_int      = sum_big_int;
        this.multiply_big_int = multiply_big_int;
        
        this.factors          = factors;
        this.factorial_sum    = factorial_sum;
        
        this.proper_divisors  = proper_divisors;
        this.array_sum        = array_sum;
        
        this.n_permutation    = n_permutation;
        
        this.is_pandigital    = is_pandigital;
        
        this.is_palindrome    = is_palindrome;
    }

module.exports = new math;


function is_prime(p)
    {
        if     (p     == 1)                                           { return false; }
        else if(p     == 2 || p     == 3 || p     == 5 || p     == 7) { return true;  }
        else if(p % 2 == 0 || p % 3 == 0 || p % 5 == 0 || p % 7 == 0) { return false; }
        
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

function prime_sum(n)
    {
        var result = 2 + 3 + 5 + 7;
        
        for(var p = 11; p < n; p++)
            {
                if( is_prime(p) ) { result += p; }
            }

        return result;
    }

function sum(k)
    {
        var sum = 0;
        
        for(var n = 1; n <= k; n++)
            {
                sum += n;
            }

        return sum;
    }

function sum_square(n)
    {
        var result = 0;
        
        for(var m = 1; m <= n; m++)
            {
                result += Math.pow(m, 2);
            }

        return result;
    }

function square_sum(n)
    {
        var result = 0;
        
        for(var m = 1; m <= n; m++)
            {
                result += m;
            }

        return Math.pow(result, 2);
    }

function divisor_n(n)
    {
        var result = 0;
        
        var root = Math.ceil(Math.sqrt(n));
        for(var m = 1; m <= root; m++)
            {
                if(n % m == 0) { result++; }
            }

        return result*2;
    }

function n_fib(a, b, i, n)
    {
        if(i == n) { return a; }
        
        return n_fib(a+b, a, ++i, n);
    }

function collatz(n)
    {
        return n%2 == 0 ? n/2 : 3*n+1;
    }

function collatz_length(n)
    {
        /****************************
        * Starting and ending terms
        ****************************/
        var length = 2;
        
        while( collatz(n) != 1 )
            {
                n = collatz(n);
                length++;
            }

        return length;
    }

function lattice(n, m)
    {
        if(n == size && m == size) { result++; }
        
        if( n < size ) { lattice(n+1, m); }
        
        if(!(n == 0 && m == 0))
            {
                if( m < size ) { lattice(n, m+1); }
            }
    }

function lattice_fill(size)
    {
        var map = new Array(size+1);
        for(var n = 0; n < size+1; n++) { map[n] = new Array(size+1); }
        
        for(var n = 0; n < size+1; n++)
            {
                map[n][size] = 1;
                map[size][n] = 1;
            }

        for(var m = size-1; m >= 0; m--)
            {
                for(var n = size-1; n >= 0; n--)
                    {
                        map[m][n] = map[m+1][n] + map[m][n+1];
                    }
            }
        
        
        return map[0][0];
    }

function gcd(n, m)
    {
        return m == 0 ? n : gcd(m, n%m);
    }

function are_coprimes(n, m)
    {
        return gcd(n, m) == 1;
    }

function totient(n)
    {
        var res = 0;
        
        for(var m = 1; m < n; m++)
            {
                if((n % 2 == 0 && m % 2 == 0) || (n%3 == 0 && m % 3 == 0)) { continue; }
                
                if( are_coprimes(n, m) ) { res++; }
            }
        
        return res;
    }



/***************************
* Get the length of an int
***************************/
function int_length(n)
    {
        return n.toString().length;
    }


/**************************************************
* Substr an int and return all but the last digit
**************************************************/
function remove_last(n)
    {
        return parseInt(n.toString().substr(0, int_length(n)-1));
    }


/**********************************
* Return the last digit of an int
**********************************/
function last_digit(n)
    {
        return parseInt( n.toString().substr(-1) );
    }


/**************************************************************************************************
* Sum two arbitrary length ints (passed as strings) always that the two ints have the same length
**************************************************************************************************/
function sum_big_int(a, b)
    {
        var result = '';
        var sum    = 0;
        var temp   = 0;
        
        
        /*********************************************************
        * Convert a and b to arrays starting with the last digit
        *********************************************************/
        if(a.length != b.length)
            {
                if     (a.length > b.length) { while(b.length < a.length) { b = '0'+b; } }
                else if(b.length > a.length) { while(a.length < b.length) { a = '0'+a; } }
            }
        
        a = a.split('').reverse();
        b = b.split('').reverse();
        
        
        for(var n = 0, len = a.length; n < len; n++)
            {
                /*******************************************************
                * Add the rest of the last sum and remove it from temp
                *******************************************************/
                sum  = last_digit(temp);                
                temp = last_digit(temp) == 0  ? temp/10 : temp - last_digit(temp);
                
                
                /*********************************************************************
                * Add the last two integers and add the rest to temp if there is one
                *********************************************************************/
                sum += parseInt(a[n]) + parseInt(b[n]);
                if(sum > 9) { temp += remove_last(sum); }
                
                
                result = last_digit(sum).toString() + result;
            }

        
        /*********************************************
        * Add the rest to the result if there is any
        *********************************************/
        if(temp > 0)
            {
                result = temp.toString() + result;
            }
        
        
        return result;
    }


function sum_big_int_fast(a, b)
    {
        var result = [];
        var sum    = 0;
        var temp   = 0;
        
        
        /*********************************************************
        * Convert a and b to arrays starting with the last digit
        *********************************************************/
        var a_bin = 1;
        var b_bin = 1;
        
        if(a.length != b.length)
            {
                if     (a.length > b.length) { while(b.length < a.length) { b.unshift(0); } }
                else if(b.length > a.length) { while(a.length < b.length) { a.unshift(0); } }
            }
        
        a.reverse();
        b.reverse();
        
        
        return result;
    }

function multiply_big_int(a, b)
    {
        var temp = a;
        
        for(var n = 0; n < b-1; n++)
            {
                a = sum_big_int(a, temp);
            }

        return a;
    }

function factors(n)
    {
        var factors = [];
        
        for(var m = 1; m <= n; m++)
            {
                if(n%m == 0) { factors.push(m); }
            }

        return factors;
    }


function factorial_sum(n)
    {
        var result = '1';
        var sum    = 0;
        
        for(var m = 1; m < n; m++)
            {
                result = multiply_big_int(result, (m+1).toString());
            }

        for(var m = 0; m < result.length; m++)
            {
                sum += parseInt(result[m]);
            }

        return sum;
    }

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

function _has_inverse_order(arr, offset)
    {
        for(var n = offset; n < arr.length; n++)
            {
                if(arr[n] <= arr[n+1]) { return false; }
            }
        
        return true;
    }

function _set_lexicographic_order(arr, offset)
    {
        var sub_arr = [];
        
        
        for(var n = offset; n < arr.length; n++)
            {
                sub_arr.push(arr[n]);
            }

        sub_arr.sort();
        
        
        for(var n = offset, m = 0; n < arr.length; n++, m++)
            {
                arr[n] = sub_arr[m];
            }
    }

function _lowest_possible(arr, offset)
    {
        var n     = arr[offset];
        var lowest = 100;
        
        for(var m = offset; m < arr.length; m++)
            {
                /***********************************************
                * It is closer to n if its rest is closer to 0
                ***********************************************/
                if( n < arr[m] && n-arr[m] > n-lowest )
                    {
                        lowest = arr[m];
                    }
            }

        return lowest == 100 ? false : lowest;
    }

function _swap(arr, offset)
    {
        var n      = arr[offset];
        var lowest = _lowest_possible(arr, offset);
        
        if(lowest == false) { return false; }
        
        for(var m = 0; m < arr.length; m++)
            {
                if(arr[m] == lowest) { arr[m] = n; }
                else if(arr[m] == n) { arr[m] = lowest; }
            }
    }

function n_permutation(n_arr, target)
    {
        var len         = n_arr.length;
        var permutation = 1;
        
        while( !_has_inverse_order(n_arr, 0) )
            {
                for(var offset = 0; offset < len-1; offset++)
                    {
                        if( _has_inverse_order(n_arr, offset+1) )
                            {
                                _swap(n_arr, offset);
                                _set_lexicographic_order(n_arr, offset+1);
                                
                                permutation++;
                                if(permutation == target) { return n_arr.join(''); }
                            }
                    }
            }
    }

function is_pandigital(n)
    {
        n = n.toString();
        
        for(var i = 1; i <= n.length; i++)
            {
                if( !n.includes(i) ) { return false; }
            }

        return true;
        
        /*
        return n.includes(1) &&
               n.includes(2 && 
               n.includes(3) &&
               n.includes(4) &&
               n.includes(5) &&
               n.includes(6) &&
               n.includes(7) &&
               n.includes(8) &&
               n.includes(9);
        */
    }

function is_palindrome(str)
    {
        var len = str.length;
        
        return len % 2 == 0 ?
            str.substr(0, len/2)             == reverse( str.substr(len/2) ) :
            str.substr(0, Math.floor(len/2)) == reverse( str.substr(Math.ceil(len/2)) );
    }