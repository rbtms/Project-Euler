/***************************************************************************
* Project euler 3
*
* Title   : Largest prime factor
* Problem : What is the largest prime factor of the number 600851475143 ?
* URL     : https://projecteuler.net/problem=3
*
***************************************************************************/

var n    = 600851475143;
var root = Math.ceil(Math.sqrt(n));


function is_prime(n)
    {
        /******************************************************************
        * Check for frequently repeated numbers to speed up the algorithm
        ******************************************************************/
        if(n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0)
            {
                return false;
            }
        else
            {
                /****************************************************
                * Check if there is an even division for 11-sqrt(n)
                ****************************************************/
                var root = Math.ceil(Math.sqrt(n));
                
                for(var m = 11; m < root; m++)
                    {
                        if(n % m == 0) { return false; }
                    }
            }

        
        return true;
    }


for(var m = root; m > 0; m--)
    {
        if( n % m == 0 && is_prime(m))
            {
                console.log(m);
                process.exit();
            }
    }