/*******************
* Project euler 15
*******************/

var size   = 3;
var result = 0;

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


var result = lattice_fill(20);
console.log(result);

/*
lattice(0, 0);
result *= 2;

console.log(result);
*/