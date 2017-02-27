/*****************************************************************
* Project euler 16
*
* Title   : Power digit sum
* Problem : What is the sum of the digits of the number 2**1000?
* URL     : https://projecteuler.net/problem=16
*
*****************************************************************/

/***************************
* Get the length of an int
***************************/
function int_length(n)
    {
        return n.toString().length;
    }


/**************************************************
* Substr an int and return all but the last digit
**************************************************/
function remove_last(n)
    {
        return parseInt(n.toString().substr(0, int_length(n)-1));
    }


/**********************************
* Return the last digit of an int
**********************************/
function last_digit(n)
    {
        return parseInt( n.toString().substr(-1) );
    }


/**************************************************************************************************
* Sum two arbitrary length ints (passed as strings) always that the two ints have the same length
**************************************************************************************************/
function sum_big_int(a, b)
    {
        var result = '';
        var sum    = 0;
        var temp   = 0;
        
        
        /*********************************************************
        * Convert a and b to arrays starting with the last digit
        *********************************************************/
        a = a.split('').reverse();
        b = b.split('').reverse();
        
        
        for(var n = 0, len = a.length; n < len; n++)
            {
                /*******************************************************
                * Add the rest of the last sum and remove it from temp
                *******************************************************/
                sum  = last_digit(temp);                
                temp = last_digit(temp) == 0  ? temp/10 : temp - last_digit(temp);
                
                
                /*********************************************************************
                * Add the last two integers and add the rest to temp if there is one
                *********************************************************************/
                sum += parseInt(a[n]) + parseInt(b[n]);
                if(sum > 9) { temp += remove_last(sum); }
                
                
                result = last_digit(sum).toString() + result;
            }

        
        /*********************************************
        * Add the rest to the result if there is any
        *********************************************/
        if(temp > 0)
            {
                result = temp.toString() + result;
            }
        
        
        return result;
    }


var num    = '2';
var result = 0;

for(var n = 1; n < 1000; n++)       { num = sum_big_int(num, num); }
for(var n = 0; n < num.length; n++) { result += parseInt(num[n]);  }


console.log(result);