/****************
* Utils library
****************/

function Utils()
    {
        this.sleep   = sleep;
        this.replace = replace;
    }

module.exports = new Utils;


function sleep(ms)
    {
        var time = new Date().getTime();
        ms      *= 145;
        
        while(new Date().getTime() < time + ms) {}
    }

function contains(arr, n)
    {
        for(var i = 0, len = arr.length; i < len; i++)
            {
                if( arr[i] == n ) { return true; }
            }

        return false;
    }

function replace(arr, n, m)
    {
        for(var key in arr)
            {
                if(arr[key] == n)
                    {
                        arr[key] = m;
                        
                        return true;
                    }
            }

        return false;
    }