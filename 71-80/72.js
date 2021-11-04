// project euler 72
var math   = require('./lib/math.js');
var mathjs = require('mathjs');


var check_base = [];
for(var i = 0; i < 1000000; i++) { check_base.push(i.toString()); }

var set_len = 0;

var d, n;
var pattern;
var n_str;
for(d = 0; d <= 100; d++)
    {
        pattern = {};
        
        var guess = 0;
        var res   = 0;
        
        
        for(var n = 1; n < d && n < 100; n++)
            {
                if( math.are_coprimes(n, d) )
                    {
                        var n_str = n.toString();
                        pattern[ n_str[n_str.length-1] ] = true;
                    }
            }

        var check = check_base.filter( (n) => pattern[ n[n.length-1] ] );

        
        console.log();
        console.log(d);
        console.log(pattern);
        //console.log(check);
        console.log('Guess:', guess);
        console.log('Res:', res);
        console.log();
    }


//console.log('Result', set_len);