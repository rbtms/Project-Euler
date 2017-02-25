/*******************
* Project euler 20
*******************/

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
        if(a.length != b.length)
            {
                if     (a.length > b.length) { while(b.length < a.length) { b = '0'+b; } }
                else if(b.length > a.length) { while(a.length < b.length) { a = '0'+a; } }
            }
        
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

function multiply_big_int(a, b)
    {
        var temp = a;
        
        for(var n = 0; n < b-1; n++)
            {
                a = sum_big_int(a, temp);
            }

        return a;
    }


function factorial_sum(n)
    {
        var result = '1';
        var sum    = 0;
        
        for(var m = 1; m < n; m++)
            {
                result = multiply_big_int(result, (m+1).toString());
            }

        for(var m = 0; m < result.length; m++)
            {
                sum += parseInt(result[m]);
            }

        return sum;
    }



var result = factorial_sum(100);

console.log(result);