var res = [];

var two_sum = [];
for(var i = 0; i < 100; i++) { two_sum.push( find_two_sum(i) ); }

function find_sum(target, total, n)
    {
        if(target == total)
            {
                //console.log(n);
                res.push( n.slice() );
                return;
            }
        
        for(var i = 1; i <= target-total; i++)
            {
                find_sum(target, total+i, n.concat(i));
            }
    }

function find_two_sum(n)
    {
        var res = [];
        
        for(var i = 0; i < n; i++)
            {
                for(var j = i; j < n; j++)
                    {
                        if(i + j == n) { res.push([i, j]) }
                    }
            }
        
        return res;
    }


var target = 20;

/**
find_sum(target, 0, []);

res.map( (arr) => arr.sort() );
res = res.filter( (arr) => arr.length > 1 );

console.log(res);
**/

console.log( find_two_sum(5) );
console.log(two_sum[10]);