/*********************************************************************
* Project euler 59
*
* Title   : XOR decryption
* Problem : Decrypt the message and find the sum of the ASCII values
*           in the original text.
* URL     : https://projecteuler.net/problem=59
*
*********************************************************************/

var fs = require('fs');


var cyphertext = fs.readFileSync('cyphertext.txt', 'utf8')
    .split(',');

for(var a = 97; a <= 122; a++)
    {
        for(var b = 97; b <= 122; b++)
            {
                for(var c = 97; c <= 122; c++)
                    {
                        var text = '';
                        
                        var key  = [a, b, c];
                        for(var i = 0; i < 10; i++)
                            {
                                key = key.concat(key);
                            }
                        
                        
                        for(var i = 0; i < cyphertext.length; i++)
                            {
                                text += String.fromCharCode(cyphertext[i] ^ key[i]);
                            }

                        
                        if(
                            text.match(' ')
                            && !text.match(/[<>\{\}~=/#$|`\^_\]\&+%@\*]/)
                            && !text.match(/^[\s\d:;<>=\?"#!$%&')\*\+\,-\{\}]/)
                          )
                            {
                                var result = 0;
                                
                                for(var i = 0; i < text.length; i++)
                                    {
                                        result += text[i].charCodeAt();
                                    }
                                
                                console.log(result);
                            }
                    }
            }
    }