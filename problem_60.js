/*******************
* Project euler 60
*******************/
var math = require('./lib/math.js');


var primes = math.primes.below_1000000
    .filter( (p) => p < 10000 )
    .map( (p) => p.toString() );


var P = {};
for(var i = 0; i < primes.length; i++) { P[primes[i]] = {}; }


function get_set(P, i, lim)
    {
        for(var j in P)
            {
                //console.log(j);
                
                
                if(i < lim)
                    {
                        get_set(P[j], i+1, lim);
                    }
                else
                    {
                        var set = {};
                        
                        for(var k in P)
                            {
                                if(j == k) { continue; }
                                
                                
                                if( math.is_prime(j + k) && math.is_prime(k + j) )
                                    {
                                        set[k] = {};
                                    }
                            }
                        
                        
                        if(Object.keys(set).length == 0)
                            {
                                delete P[j];
                            }
                        else
                            {
                                P[j] = set;
                            }
                    }
            }
    }


//for(var i = 0; i < 5; i++)
//    {
        get_set(P, 0, 0);
        get_set(P, 0, 1);
        
        console.log(P);
        //console.log(Object.keys(P).length);
//    }