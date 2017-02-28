/*******************
* Project euler 33
*******************/

for(var n = 10; n < 100; n++)
    {
        if(n % 10 == 0 || n % 11 == 0) { continue; }
        
        for(var m = n+1; m < 101; m++)
            {
                if( (m % n == 0) || (n%2 == m%2) || (n%3 == m%3) ) { continue; }
                var n_str = n.toString();
                var m_str = m.toString();
                
                if(
                    //(m % n != 0) &&
                    //!(n_str[1] == m_str[1] != 0) &&
                    (n_str[0] / m_str[0] == n/m) ||
                    (n_str[0] / m_str[1] == n/m) ||
                    (n_str[1] / m_str[0] == n/m) ||
                    (n_str[1] / m_str[1] == n/m)
                  )
                    {
                        console.log(n+' / '+m+' = '+n/m);
                    }
            }
    }