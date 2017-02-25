/************************
* Euler project 18 / 67
************************/
var fs = require('fs');


/**************************************************************************************************
* Glibal variables
**************************************************************************************************/
var triangle = fs.readFileSync('triangle_2.txt', 'utf8')
                .split('\n')
                .map( function(line) { return line.trim().split(' ').map( function(c) { return parseInt(c); } )} );

var result = 0;


/**************************************************************************************************
* Functions
**************************************************************************************************/

/*******************************************************************
* Check whether the index it is trying to move is undefined or not
*******************************************************************/
function can_move(m, n)
    {
        return (triangle[m] === undefined || triangle[m][n] === undefined) ? false : true;
    }


/**************************************************************
* Find the highest posible sum of the triangle starting at mn
**************************************************************/
function find_path(m, n, sum)
    {
        sum += triangle[m][n];
        
        if(result < sum) { result = sum; }
        
        if( can_move(m+1, n)   ) { find_path(m+1, n,   sum); }
        if( can_move(m+1, n+1) ) { find_path(m+1, n+1, sum); }
    }


/*****************************************************************************************
* Find the higher sum in the triangle
*
* Steps:
*
* - 1: Divide the triangle into the smallest triangles posible (from last line to first)
* - 2: Replace every index with the highest posible sum of that small triangle
* - 3: Once all sums are replaced remove the next line
* - 4: Repeat until only the first line is left
* - 5: The number at the first index is the highest posible sum
*
*****************************************************************************************/
function pre_process()
    {
        for(var m = triangle.length-1; m >= 0; m--)
            {
                for(var n = 0, len = triangle[m].length; n < len; n++)
                    {
                        result = 0;
                        
                        find_path(m, n, 0);                        
                        triangle[m][n] = result;
                        
                        /**********************************************************
                        * Replace next line by [undefined] if it's the last index
                        **********************************************************/
                        if(n == triangle[m].length-1 && triangle[m+1] !== undefined)
                            {
                                triangle[m+1] = [undefined];
                            }
                    }
            }
    }


/**************************************************************************************************
* Execution
**************************************************************************************************/
pre_process();
console.log(triangle[0][0]);
