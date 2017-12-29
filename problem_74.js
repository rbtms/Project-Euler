// project euler 74
var math   = require('./lib/math.js');
var mathjs = require('mathjs');


var result = 0;

for(var i = 0; i < 1000000; i++)
    {
        var n    = i;
        var past = [];
        
        console.log(n);
        
        while( !past.includes(n) )
            {
                past.push(n);
                
                var n_str = n.toString();
                var res   = 0;
                
                for(var j = 0; j < n_str.length; j++)
                    {
                        res += mathjs.factorial(n_str[j]);
                    }
        
                n = res;
                //console.log('  ->', n, res);
            }
        
        if(past.length == 60) { result++; }
        //console.log(past.length-1);
        //console.log();
    }

console.log('Result', result);