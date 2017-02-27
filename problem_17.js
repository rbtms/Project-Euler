/***********************************************************************
* Project euler 17
*
* Title   : Number letter counts
*
* Problem : If all the numbers from 1 to 1000 (one thousand) inclusive
*           were written out in words, how many letters would be used? 
*
* URL     : https://projecteuler.net/problem=17
*
***********************************************************************/

var word_list =
    {
        0    : '',
        1    : 'one',
        2    : 'two',
        3    : 'three',
        4    : 'four',
        5    : 'five',
        6    : 'six',
        7    : 'seven',
        8    : 'eight',
        9    : 'nine',
        10   : 'ten',
        11   : 'eleven',
        12   : 'twelve',
        13   : 'thirteen',
        14   : 'fourteen',
        15   : 'fifteen',
        16   : 'sixteen',
        17   : 'seventeen',
        18   : 'eighteen',
        19   : 'nineteen',
        20   : 'twenty',
        30   : 'thirty',
        40   : 'forty',
        50   : 'fifty',
        60   : 'sixty',
        70   : 'seventy',
        80   : 'eighty',
        90   : 'ninety',
        100  : 'one hundred',
        200  : 'two hundred',
        300  : 'three hundred',
        400  : 'four hundred',
        500  : 'five hundred',
        600  : 'six hundred',
        700  : 'seven hundred',
        800  : 'eight hundred',
        900  : 'nine hundred',
        1000 : 'one thousand'
    };


var letter_n = 0;

for(var n = 1; n < 1000; n++)
    {
        if(n < 20)
            {
                letter_n += word_list[n].length;
            }
        else if(n < 100)
            {
                var first  = n % 10;
                var second = n - first;
                
                letter_n += word_list[second].length;
                letter_n += word_list[first].length;
            }
        else if(n < 1000)
            {
                var first  = n % 10;                
                var second = (n-first) % 100;
                var third  = (n - first - second);
                
                
                /******************************************************************
                * Replace one hundred and ten one... by one hundred and eleven...
                ******************************************************************/
                if(second == 10)
                    {
                        second = 10 + first;
                        first  = 0;
                    }
                
                
                letter_n += word_list[third].replace(' ', '').length;
                if(n % 100 != 0) { letter_n += 'and'.length; }
                
                letter_n += word_list[second].length;
                letter_n += word_list[first].length;
                
                
            }
    }

letter_n += word_list[1000].replace(' ', '').length;


console.log(letter_n);