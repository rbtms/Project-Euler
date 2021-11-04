/******************************************************************
* Project euler 22
*
* Title   : Names scores
* Problem : What is the total of all the name scores in the file?
* URL     : https://projecteuler.net/problem=22
*
******************************************************************/

var fs = require('fs');


var alphabet     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letter_value = {};

for(var n = 0; n < alphabet.length; n++) { letter_value[ alphabet[n] ] = n; }


var names = fs.readFileSync('names.txt', 'utf8')
            .split(',')
            .map(function(name){return name.replace(/"/g, '');})
            .sort();



var result = 0;

for(var n = 0; n < names.length; n++)
    {
        var name  = names[n].split('');
        var value = 0;
        
        for(var m = 0; m < name.length; m++)
            {
                value += letter_value[name[m]]+1;
            }
        
        result += value * (n+1);
    }


console.log(result);