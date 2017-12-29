/****************************************************************************************
* Project euler 33
*
* Title   : Digit cancelling fractions
*
* Problem : There are exactly four non-trivial examples of this type of fraction,
*           less than one in value, and containing two digits in the numerator and denominator.
*
*           If the product of these four fractions is given in its lowest common terms,
*           find the value of the denominator.
*
* URL     : https://projecteuler.net/problem=33
*
****************************************************************************************/

for(var n = 10; n < 100; n++)
    {
        for(var m = n+1; m < 100; m++)
            {
                var n_str = n.toString();
                var m_str = m.toString();
                
                for(var i = 1; i < 10; i++)
                    {
                        if( n_str.search(i) == -1 || m_str.search(i) == -1 ) { continue; }
                        
                        var regex_i  = new RegExp(i, 'g');
                        
                        var n_single = n_str.replace(regex_i, '');
                        var m_single = m_str.replace(regex_i, '');
                        
                        if(n_single.length == 0 || m_single.length == 0)
                            {
                                continue;
                            }
                        else if(n_single / m_single == n / m)
                            {
                                console.log(n+' / '+m+' = '+n/m);
                            }
                    }
            }
    }