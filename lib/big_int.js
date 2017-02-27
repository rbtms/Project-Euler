/****************
* Big_int class
****************/

const MAX_SAFE_INTEGER_arr = Number.MAX_SAFE_INTEGER.toString().split('');
const MAX_SAFE_INTEGER_bin = new Array(53).fill(1);

function Big_int(n)
    {
        this.bits = n_bits(n);        
        
        if(n > Number.MAX_SAFE_INTEGER)
            {
                str_to_bin_arr(n, 64);
            }
        else
            {
                this.add_int(n);
            }
    }


Big_int.prototype.len     = 64;
Big_int.prototype.n       = new Array( Big_int.prototype.len ).fill(0);

Big_int.prototype.print   = function() { console.log( this.n.join('') ); }
Big_int.prototype.add_int = add_int;
Big_int.prototype.add     = add;

/*
this.sum      = '';
this.rest     = '';
this.multiply = '';
this.divide   = '';
*/




function n_bits(n)
    {
        return Math.floor(Math.log2(n))+1;
    }

function str_to_bin_arr(n_str)
    {
        var n_bin = n_str.split('');        
        var n_div = Math.floor(n_str/Number.MAX_SAFE_INTEGER);
        
        //var rest = 
        console.log(n_bin);
        console.log(n_str, n_div);
    }

function get_rest(n_arr)
    {
        var n_len = n_arr.length;
        var m_len = MAX_SAFE_INTEGER_arr.length;
        
        var a, b;
        var carry = 0;
        
        for(var i = 0; i < n_arr.length; i++)
            {
                a = n_arr[ n_len-i-1 ];
                b = i >= m_len ? 0 : MAX_SAFE_INTEGER_arr[ m_len-i-1 ];
                
                n_arr[ n_len-i-1 ] = Math.abs(n_arr[ n_len-i-1 ] - b + carry);
                
                rest  = a - b + carry;
                carry = rest < 0 ? rest : 0;
                
                console.log(i, '-', a, b, rest);
            }

        console.log(n_arr);
        return n_arr;
    }
    
function int_to_str(m)
    {
        var m_bin = new Array(this.len).fill(0);
        var m_len = n_bits(m);
        
        for(var i = 0; i < m_len; i++)
            {
                m_bin[ this.len-1-i ] = (m >> i) & 1;
            }
        
        this.add(m_bin);
    }

function add_int(m)
    {
        var carry = false;
        var m_len = n_bits(m);
        var a, b;
        
        for(var i = 0; i < this.len; i++)
            {
                a = this.n[ this.len-i-1 ];
                b = i >= m_len ? 0 : ( (m >> i) & 1 );
                
                this.n[ this.len-i-1 ] = a ^ b ^ carry;
                carry = a+b+carry > 1;
            }
    }

function add(m)
    {
        var carry = false;
        var a, b;
        
        for(var i = 0; i < m.length+1; i++)
            {
                a = this.n[ this.len-i-1 ];
                b = m[ m.length-i-1 ];
                
                this.n[ this.len-i-1 ] = a ^ b ^ carry;
                carry = a+b+carry > 1;
            }
    }


function pow()
    {
        
    }

/*
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        9 0 0 7 1 9 9 2 5 4 7 4 0 9 9 1
    1 1 8 1 1 6 0 8 8 1 4 3 6 3 1 8 8 0
    
    1 0 2 1 0 3 9 1 1 8 5 6 3 7 0 1 2 0
 */
    
//var n = new Big_int('111111111111111111');

/*
console.log('111111111111111111');
console.log(MAX_SAFE_INTEGER_arr.join(''));

get_rest('111111111111111111'.split(''));
*/

