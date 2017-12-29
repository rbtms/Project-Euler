/*******************
* Project euler 54
*******************/

var fs = require('fs');


/************************************************************
* DONE Royal flush    : T J Q K A
*
* DONE Straight flush : suit(5C5), a < b < c < d < e
*   DRAW: Check which consecutive chain of values is higher
*
* DONE Four of a kind : value(4C5)
*   DRAW: Check which hand is higher
*   DRAW: Check which card is higher
*
* DONE Full house     : value(3C5), value(2C5-3)
*   DRAW: Check which hand is higher
*   DRAW: Check which pair is higher
*
* DONE Flush          : suit(5C5)
*   DRAW: Check which hand is higher
*
* DONE Straight       : a < b < c < d < e
*   DRAW: Check which consecutive chan is higher
*
* DONE Three of a kind: value(3C5)
*   DRAW: Check which one is higher
*   DRAW: Check for a pair, if so check the value
*   DRAW: If not, check which card is higher
*
* DONE Two pairs      : 2*value(2C5)
*   DRAW: Check which pair (first) is higher
*   DRAW: Check which pair (second) is higher
*   DRAW: Check which card is higher
*   
* DONE One pair       : value(2C5)
*   DRAW: Check which pair is higher
*   DRAW: Check which card is higher
*
* DONE High card      : Highest value card
*   DRAW: Check which other card is higher
*
*
************************************************************/

var char_value =
    {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'T': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };


function n_value(card)
    {
        return char_value[ card[0] ];
    };


/*************
*  T J Q K A
*************/
function r_flush(hand)
    {
        return hand[0][0] == 'T'
            && hand[1][0] == 'J'
            && hand[2][0] == 'Q'
            && hand[3][0] == 'K'
            && hand[4][0] == 'A'
                ? [10]
                : false;
    }


/********************
* suit(5C5)
* a < b < c < d < e
********************/
function s_flush(hand)
    {
        return ( n_value( hand[4] ) - n_value( hand[0] ) == 4 )
            && hand[0][1] == hand[1][1]
            && hand[0][1] == hand[2][1]
            && hand[0][1] == hand[3][1]
            && hand[0][1] == hand[4][1]
                ? [9, hand[0]]
                : false;
    }


/*************
* value(4C5)
*************/
function four_of_a_kind(hand)
    {
        for(var i = 0; i < 2; i++)
            {
                if(hand[i][0] == hand[i+3][0])
                    {
                        var four_val = hand[i];
                        var hand_2   = hand.slice();
                        
                        hand_2.splice(i, 4);
                        
                        return [8, four_val, hand_2[0]];
                    }
            }

        
        return false;
    }


/***************
* suit(3C5)
* value(2C5-3)
***************/
function full_house(hand)
    {
        for(var i = 0; i < 4; i++)
            {
                if( hand[i][0] == hand[i+1][0] )
                    {
                        var hand_2 = hand.slice();
                        
                        hand_2.splice(i, 2);
                        
                        if( hand_2[0][0] == hand_2[1][0] && hand_2[0][0] == hand_2[2][0] )
                            {
                                var val_three = hand_2[0];
                                var val_pair  = hand[i];
                                
                                return [7, val_three, val_pair];
                            }
                    }
            }


        return false;
    }


/************
* suit(5C5)
************/
function flush(hand)
    {
        return hand[0][1] == hand[1][1]
            && hand[0][1] == hand[2][1]
            && hand[0][1] == hand[3][1]
            && hand[0][1] == hand[4][1]
                ? [6].concat( hand.reverse() )
                : false;
    }


/********************
* a < b < c < d < e
********************/
function straight(hand)
    {
        return ( n_value( hand[4] ) - n_value( hand[0] ) == 4 )
            ? [5, hand[0]]
            : false;
    }


/*************
* value(3C5)
*************/
function three_of_a_kind(hand)
    {
        for(var i = 0; i < 3; i++)
            {
                if( hand[i][0] == hand[i+2][0] )
                    {
                        var three_val = hand[i];
                        var hand_2    = hand.slice();
                        
                        hand_2.splice(i, 3);
                        
                        return [4, three_val].concat( hand_2.reverse() );
                    }                    
            }

        
        return false;
    }


/***************
* 2*value(2C5)
***************/
function two_pairs(hand)
    {
        for(var i = 0; i < 4; i++)
            {
                if( hand[i][0] == hand[i+1][0] )
                    {
                        var pair_1_val = hand[i];                        
                        var hand_2     = hand.slice();
                        
                        hand_2.splice(i, 2);
                        
                        for(var j = 0; j < 1; j++)
                            {
                                if(hand_2[j][0] == hand_2[j+1][0])
                                    {
                                        var pair_2_val = hand_2[j];
                                        
                                        hand_2.splice(j, 2);
                                        
                                        [pair_1_val, pair_2_val] =
                                            [pair_1_val, pair_2_val].sort(sort_cards).reverse();
                                        
                                        return [3, pair_1_val, pair_2_val, hand[0]];
                                    }
                            }
                    }
            }

        
        return false;
    }

/*************
* value(2C5)
*************/
function one_pair(hand)
    {
        for(var i = 0; i < 4; i++)
            {
                if(hand[i][0] == hand[i+1][0])
                    {
                        var val_pair = hand[i];
                        var hand_2   = hand.slice();
                        
                        hand_2.splice(i, 2);
                        
                        return [2, val_pair].concat( hand_2.reverse() );
                    }
            }
    }


function points(hand)
    {
        return r_flush(hand)
            || s_flush(hand)
            || four_of_a_kind(hand)
            || full_house(hand)
            || flush(hand)
            || straight(hand)
            || three_of_a_kind(hand)
            || two_pairs(hand)
            || one_pair(hand)
            || [1].concat( hand.reverse() );
    }


function sort_cards(card_1, card_2)
    {
        return n_value(card_1) - n_value(card_2);
    }


var hands = fs.readFileSync('poker.txt', 'utf8')
    .split('\n')
    .map( function(line)
        {
            line.trim();
                    
            var card = line.match(/[^\s]{2}/g);
                    
            return [ card.slice(0, 5).sort(sort_cards), card.slice(5, 11).sort(sort_cards) ];
        });


var result = 0;

for(var i = 0; i < hands.length; i++)
    {
        var points_a = points(hands[i][0]);
        var points_b = points(hands[i][1]);
        
        
        if(points_a[0] > 0) { console.log(hands[i][0], points_a); }
        if(points_b[0] > 0) { console.log(hands[i][1], points_b); }
        
        
        if( points_a[0] > points_b[0] )
            {
                result++;
            }
        else if( points_a[0] == points_b[0] )
            {
                for(var j = 1; j < points_a.length; j++)
                    {
                        if( n_value( points_a[j] ) > n_value( points_b[j] ) )
                            {
                                result++;
                                break;
                            }
                        else if( n_value( points_a[j] ) < n_value( points_b[j] ) )
                            {
                                break;
                            }
                    }
            }
    }


console.log(result);