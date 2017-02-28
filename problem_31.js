/******************************************************************************
* Project euler 31
*
* Title   : Coin sums
* Problem : How many different ways can £2 be made using any number of coins?
* URL     : https://projecteuler.net/problem=31
*
******************************************************************************/

var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var result = 0;

function get_pos(sum, i)
    {
        if     (i == 8 && sum == 200) { result++; }
        else if(i == 8 || sum  > 200) { return; }
        
        for(var j = 0; j <= 200/coins[i]; j++)
            {
                get_pos(sum+coins[i]*j, i+1);
            }

        
    }


get_pos(0, 0);
console.log(result);