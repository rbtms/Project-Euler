/****************************************************************************************
* Project euler 32
*
* Title   : Pandigital products
*
* Problem : Find the sum of all products whose multiplicand/multiplier/product identity
*           can be written as a 1 through 9 pandigital.
*
* URL     : https://projecteuler.net/problem=32
*
****************************************************************************************/

/*********************************************
* Which when multiplied by 1 gives 11 digits
*********************************************/
const LAST = 10000;


function is_pandigital(n)
    {
        return n.replace(1, '')
                .replace(2, '')
                .replace(3, '')
                .replace(4, '')
                .replace(5, '')
                .replace(6, '')
                .replace(7, '')
                .replace(8, '')
                .replace(9, '')
                .length == 0 ? true : false;
    }


var product;
var result = {};

for(var n = 0; n < LAST; n++)
    {
        for(var m = 0; m < LAST; m++)
            {
                product     = n*m;
                product_str = n.toString() + m.toString() + product.toString();
                
                if(product_str.length != 9 ) { continue; }
                
                if( is_pandigital(product_str) ) { result[product] = true; }
            }
    }


var sum = 0;
for(var key in result) { sum += parseInt(key); }

console.log(sum);