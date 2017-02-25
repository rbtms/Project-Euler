/*******************
* Project euler 19
*******************/

var month_days = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var week_day   = 0;

var result = 0;


for(var year = 1900; year < 2001; year++)
    {
        /***********************
        * Calculate leap years
        ***********************/
        month_days[1] = ( (year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0) ) ? 29 : 28;
        
        for(var month = 0; month < 12; month++)
            {
                for(var day = 0; day < month_days[month]; day++)
                    {
                        if(year > 1900 && day == 0 && week_day == 6) { result++; }
                        week_day = (week_day+1) % 7;
                    }
            }
    }


console.log(result);