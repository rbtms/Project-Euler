/************************************************************
* Project euler 24
*
* Title   : Lexicographic permutations
*
* Problem : What is the millionth lexicographic permutation
*           of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*
* URL     : https://projecteuler.net/problem=24
*
************************************************************/

function has_inverse_order(arr, offset)
    {
        for(var n = offset; n < arr.length; n++)
            {
                if(arr[n] <= arr[n+1]) { return false; }
            }
        
        return true;
    }

function set_lexicographic_order(arr, offset)
    {
        var sub_arr = [];
        
        
        for(var n = offset; n < arr.length; n++)
            {
                sub_arr.push(arr[n]);
            }

        sub_arr.sort();
        
        
        for(var n = offset, m = 0; n < arr.length; n++, m++)
            {
                arr[n] = sub_arr[m];
            }
    }

function lowest_possible(arr, offset)
    {
        var n     = arr[offset];
        var lowest = 100;
        
        for(var m = offset; m < arr.length; m++)
            {
                /***********************************************
                * It is closer to n if its rest is closer to 0
                ***********************************************/
                if( n < arr[m] && n-arr[m] > n-lowest )
                    {
                        lowest = arr[m];
                    }
            }

        return lowest == 100 ? false : lowest;
    }

function swap(arr, offset)
    {
        var n      = arr[offset];
        var lowest = lowest_possible(arr, offset);
        
        if(lowest == false) { return false; }
        
        for(var m = 0; m < arr.length; m++)
            {
                if(arr[m] == lowest) { arr[m] = n; }
                else if(arr[m] == n) { arr[m] = lowest; }
            }
    }

function n_permutation(n_arr, target)
    {
        var len         = n_arr.length;
        var permutation = 1;
        
        while( !has_inverse_order(n_arr, 0) )
            {
                for(var offset = 0; offset < len-1; offset++)
                    {
                        if( has_inverse_order(n_arr, offset+1) )
                            {
                                swap(n_arr, offset);
                                set_lexicographic_order(n_arr, offset+1);
                                
                                permutation++;
                                if(permutation == target) { return n_arr.join(''); }
                            }
                    }
            }
    }


var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = n_permutation(n, 1000000);

console.log(result);