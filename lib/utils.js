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