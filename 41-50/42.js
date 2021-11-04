/****************************************************************
* Project euler 42
*
* Title   : Coded triangle numbers
*
* Problem : How many words from words.txt are triangle words ?
*           (the sum of its letters is a triangle number)
*
* URL     : https://projecteuler.net/problem=42
*
****************************************************************/

var fs = require('fs');


/********************************
* Create an alphabet value hash
********************************/
var letter_value = {};
'abcdefghijklmnopqrstuvwxyz'.split('').map( function(c, i) { letter_value[ c.toUpperCase() ] = i+1; } )


/*************************************
* Get all triangle numbers n =< 1000
*************************************/
var triangle = {};
for(var n = 0; n < 1000; n++)
    {
        triangle[ n*(n+1)/2 ] = true;
    }


var words = fs.readFileSync('words.txt', 'utf8')
                .split(',')
                .map( function(word) { return word.replace(/"/g, ''); } );


var result = 0;

for(var i in words)
    {
        var sum = 0;
        
        for(var j = 0; j < words[i].length; j++)
            {
                sum += letter_value[ words[i][j] ];
            }

        
        if(triangle[sum]) { result++; }
    }


console.log(result);