#
# Project euler 97
#
# Title : Large Non-Mersenne Prime
# URL   : https://projecteuler.net/problem=97
#
from enum import Enum


class Value(Enum):
    # Name and value for comparison
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5
    SIX = 6
    SEVEN = 7
    EIGHT = 8
    NINE = 9
    TEN = 10
    JACK = 11
    QUEEN = 12
    KING = 13
    ACE = 14

    def __lt__(self, other):
        return self.value < other.value
    
    def __str__(self):
        return str(self.name)

    @staticmethod
    def from_string_value(val):
        if val == 'A': return Value.ACE
        elif val == 'K': return Value.KING
        elif val == 'Q': return Value.QUEEN
        elif val == 'J': return Value.JACK
        elif val == 'T': return Value.TEN
        else: return Value(int(val))


class Suit(Enum):
    HEARTS = 'H'
    SPADES = 'S'
    CLUBS = 'C'
    DIAMONDS = 'D'

    def __str__(self):
        return self.name


class Card:
    def __init__(self, value_suit):
        self.value = Value.from_string_value(value_suit[0])
        self.suit = Suit(value_suit[1])

    def __eq__(self, other):
        return self.value == other.value and self.suit == other.suit

    def __str__(self):
        return str((str(self.value), str(self.suit)))


class Hand:
    def __init__(self, card_list):
        self.cards = list(map(Card, card_list))

    def __str__(self):
        s = 'Hand\n'
        
        for card in self.cards:
            s += '  ' + str(card) + '\n'

        return s
    
    def high_card(self):
        """highest value card"""
        return max([
            card.value
            for card in self.cards
        ])
    
    def one_pair(self):
        """Two cards of the same value"""
        seen = set()

        for card in self.cards:
            # Pair match
            if card.value in seen:
                highest_other = max([ other.value for other in self.cards if card.value != other.value ])

                return (card.value.value, highest_other.value)
            else:
                seen.add(card.value)

    def two_pairs(self):
        """Two different pairs of the same value"""
        seen = set()
        seen_first = False # If it has seen the first pair yet
        first = None # Value of the first pair

        for card in self.cards:
            if card.value in seen:
                if seen_first:
                    # Two pair matches
                    if first.value != card.value:
                        # Remove the two matches
                        remaining = [ _.value for _ in self.cards ]
                        remaining.remove(first)
                        remaining.remove(first)
                        remaining.remove(card.value)
                        remaining.remove(card.value)

                        a, b = sorted((first.value, card.value.value))[::-1]
                        return (a, b, remaining[0].value)
                else:
                    first = card.value
                    seen_first = True
            else:
                seen.add(card.value)
    
    def three_of_a_kind(self):
        """Three cards of the same value"""
        values = [ card.value for card in self.cards ]
        
        if any([
            values.count(val) >= 3
            for val in values
        ]):
            val_3 = [ val for val in values if values.count(val) == 3 ]
                        
            # Remove the three values of the matching three of a kind
            removed_vals = [ val for val in values ]
            for _ in range(3):
                removed_vals.remove(val_3[0])

            return (val_3[0].value, max(removed_vals).value)
    
    def straight(self):
        """All cards are consecutive values"""
        values = sorted([ card.value.value for card in self.cards ])

        if all([ values[i] == values[i+1]-1 for i in range(len(values)-1) ]):
            return self.high_card().value

    def flush(self):
        """All cards of the same suit"""
        if all([ self.cards[0].suit == card.suit for card in self.cards ]):
            return self.high_card().value
    
    def full_house(self):
        """Three of a kind and a pair"""
        values = sorted([ card.value.value for card in self.cards ])

        if all([ values[0] == val for val in values ]):
            return (self.high_card().value, self.high_card().value)
        elif any( [ values.count(val) == 3 for val in values ])\
            and any( [ values.count(val) == 2 for val in values ] ):
            val_3 = [ val for val in values if values.count(val) == 3 ][0]
            val_2 = [ val for val in values if values.count(val) == 2 ][0]
            
            return (val_3, val_2)
    
    def four_of_a_kind(self):
        """Four cards of the same value"""
        values = sorted([ card.value.value for card in self.cards ])

        if all([ val == values[0] for val in values ]):
            return (values[0], values[0])
        elif any([ values.count(val) == 4 for val in values ]):
            val_4 = [ val for val in values if values.count(val) == 4 ][0]
            val_1 = [ val for val in values if val != val_4 ][0]

            return (val_4, val_1)
    
    def straight_flush(self):
        """All cards are consecutive values of the same suit"""
        if self.straight() and self.flush():
            return self.high_card().value

    def royal_flush(self):
        """Ten, Jack, Queen, King, Ace in the same suit"""
        return self.straight() and self.flush()\
            and min([ card.value for card in self.cards ]) == Value.TEN\
            and max([ card.value for card in self.cards ]) == Value.ACE

    def score(self):
        """Assign a score value to the hand"""
        if self.royal_flush():
            return 10_000_000_000
        elif self.straight_flush() is not None:
            return self.high_card() * 100_000_000 # 200.000.000 - 1.400.000.000
        elif self.four_of_a_kind() is not None:
            a, b = self.four_of_a_kind()
            return a*10_000_000 + b # 20.000.000 - 140.000.000
        elif self.full_house() is not None:
            a, b = self.full_house()
            return a*1_000_000 + b # 2.000.002 - 14.000.014
        elif self.flush() is not None:
            return self.flush()*100_000 # 200.000 - 1.400.000
        elif self.straight() is not None:
            return self.straight()*10_000 # 20.000 - 140.000
        elif self.three_of_a_kind() is not None:
            a, b = self.three_of_a_kind()
            return a*1000 + b # 2.002 - 14.002
        elif self.two_pairs() is not None:
            a, b, c = self.two_pairs()
            return a*100 + b*10 + c # 222 - 1.554
        elif self.one_pair() is not None:
            a, b = self.one_pair()
            return a*10 + b # 22 - 154
        else:
            return self.high_card().value # 2 - 14


# -----------------------------------------------------------------------------

def parse_file(path):
    lines = open(path, 'r').readlines()
    hands = []

    for line in lines:
        hands.append((Hand(line.split()[:5]), Hand(line.split()[5:])))
    
    return hands


hands = parse_file('0054_poker.txt')

res = 0
for (hand1, hand2) in hands:
    score1 = hand1.score()
    score2 = hand2.score()

    if score1 > score2:
        res += 1

print(res)
