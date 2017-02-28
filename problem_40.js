/*******************************************************************
* Project euler 40
*
* Title   : Champernowne's constant
*
* Problem : If dn represents the nth digit of the fractional part,
*           find the value of the following expression:
*           d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*
* URL     : https://projecteuler.net/problem=40
*
*******************************************************************/

var champernowne = '';

for(var n = 0; n < 200000; n++)
    {
        champernowne += n.toString();
    }

var result = champernowne[1]
             * champernowne[10]
             * champernowne[100]
             * champernowne[1000]
             * champernowne[10000]
             * champernowne[100000]
             * champernowne[1000000];


console.log(champernowne.length);