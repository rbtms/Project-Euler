// project euler 75


var limit = 1500000;

var pow = [];
for(var i = 0; i < limit; i++) { pow.push( Math.pow(i, 2) ); }


var a, b, c;
var pow_a, pow_b, pow_c;
var half;
var n;
var limit_b;

LENGTH:
for(var L = 12; L < 100000; L++)
    {
        half = Math.ceil(L/2);
        n = 0;
        
        for(a = 1; a < L; a++)
            {
                pow_a = pow[a];
                Math.ceil( (L-a) / 2 );
                continue;
                for(b = a; b < limit_b; b++)
                    {
                        c = L-a-b;
                        //console.log(L, a, b, c);
                                
                        if( pow_a + pow[b] == pow[c] )
                            {
                                n++;
                                if(n > 1) { continue LENGTH; }
                                
                                //console.log(L + '-' + a + ' ' + b + ' ' + c);
                                
                                //console.log(a, b, c);
                            }
                    }
            }
        
        if(n == 0) { continue LENGTH; }
        console.log(L);
    }
//console.log('Result', result);