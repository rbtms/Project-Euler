/****************************************************************************************
* Project euler 51
*
* Title   : Prime digit replacements
*
* Problem : Find the smallest prime which, by replacing part of the number
*           (not necessarily adjacent digits) with the same digit,
*           is part of an eight prime value family.
*
* URL     : https://projecteuler.net/problem=51
*
****************************************************************************************/
var math   = require('./lib/math.js');
var primes = math.primes.below_1000000;


const REPLACEMENT_N = 3;


function replace(str, index, chr)
    {
        return str.substr(0, index) + chr + str.substr(index+1);
    }

function get_diff(a, b)
    {
        var index = [];
        var chr;
        
        for(var i = 0; i < a.length; i++)
            {
                if(a[i] != b[i])
                    {
                        index.push(i);
                        if(!chr) { chr = b[i]; }
                
                        if(index.length > REPLACEMENT_N || chr != b[i]) { return false; }
                        chr = b[i];
                    }
            }
        
        
        return index.length < REPLACEMENT_N ? false : index;
    }


for(var i = 0; i < primes.length; i++) { primes[i] = primes[i].toString(); }
var result = 0;

A:
for(var i = 0; i < primes.length; i++)
    {
        if(primes[i].length < REPLACEMENT_N+1) { continue; }
        
        B:
        for(var j = i+1; j < primes.length; j++)
            {
                if(primes[j].length > primes[i].length) { break; }
                
                var index = get_diff(primes[i], primes[j]);
                if(index)
                    {
                        var p      = primes[i];
                        var lowest = false;
                        var n      = 0;
                        
                        for(var k = 0; k < 10; k++)
                            {
                                p = replace(p, index[0], k.toString());
                                p = replace(p, index[1], k.toString());
                                p = replace(p, index[2], k.toString());
                                
                                if(p[0] == '0') { continue; }
                                
                                if(!lowest) { lowest = p; }
                                if( math.is_prime(p) ) { n++; }
                            }
                        
                        if(n > 7)
                            {
                                result = lowest;
                                break A;
                            }
                    }
            }
    }


console.log(result);