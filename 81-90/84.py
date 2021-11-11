#
# Project euler 84
#
# Title : Monopoly odds
# URL   : https://projecteuler.net/problem=84
#

from random import randint

class Sim:
    def __init__(self, diceSize):
        self.GO   = 0
        self.JAIL = 10
        self.G2J  = 30

        self.CC = [ 2, 17, 33 ]
        self.CH = [ 7, 22, 36 ]
        self.R  = [ 5, 15, 25, 35 ]
        self.U  = [ 12, 28 ]

        self.CC_CARDS = ["GO", "G2J"] + [ "" for _ in range(14) ]
        self.CH_CARDS = ["GO", "G2J", "TO_5", "TO_11", "TO_24", "TO_39",
                         "NEXT_R", "NEXT_R", "NEXT_U", "BACK_3"] + [ "" for _ in range(6) ]

        self.diceSize = diceSize
        self.pos = 0
        self.doubleN = 0
        self.prob = [ 0 for _ in range(40) ]
        self.moves = 0

    def throwDice(self):
        d1 = randint(1, self.diceSize)
        d2 = randint(1, self.diceSize)

        if d1 == d2:
            self.doubleN += 1
        else:
            self.doubleN = 0

        return d1+d2

    def cc(self):
        card = self.CC_CARDS.pop(0)
        self.CC_CARDS.append(card)

        if   card ==  "GO": return self.GO
        elif card == "G2J": return self.JAIL
        else:               return self.pos

    def ch(self):
        card = self.CH_CARDS.pop(0)
        self.CH_CARDS.append(card)

        if card ==  "GO":
            return self.GO
        elif card == "G2J":
            return self.JAIL
        elif card[:2] == "TO":
            return int(card[3:])
        elif card == "NEXT_R":
            r = list(filter(lambda n: n > self.pos, self.R))
            return r[0] if r else self.R[0]
        elif card == "NEXT_U":
            u = list(filter(lambda n: n > self.pos, self.U))
            return u[0] if u else self.U[0]
        elif card == "BACK_3":
            return (self.pos-3) % 40
        else:
            return self.pos
    
    def move(self):
        self.pos = (self.pos + self.throwDice()) % 40

        if self.doubleN == 3:
            self.doubleN = 0
            self.pos = self.JAIL
        else:
            if self.pos == self.G2J:
                self.doubleN = 0
                self.pos = self.JAIL
            elif self.pos in self.CC:
                self.pos = self.cc()
            elif self.pos in self.CH:
                self.pos = self.ch()

        self.prob[self.pos] += 1
        self.moves += 1

    def getProb(self):
        return list(map(lambda n: n/self.moves, self.prob))

def main():
    sim = Sim(4)

    for i in range(10000000):
        sim.move()

    probs = []
    for i, n in enumerate(sim.getProb()):
        probs.append((i, n))

    print(sorted(probs, key=lambda t: -t[1])[:3])

main()

