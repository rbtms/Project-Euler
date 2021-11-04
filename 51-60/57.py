#
# Project euler 57
#
# Title : Square root convergents
# URL   : https://projecteuler.net/problem=57
#

class Fraction:
    def __init__(self, n, m=1):
        self.n = n
        self.m = m

    def add(self, f):
        return Fraction(f.m * self.n + self.m * f.n, self.m*f.m)

    def div(self, f):
        return Fraction(f.m * self.n, f.n * self.m)

    def __str__(self):
        return "Fraction(" + str(self.n) + ", " + str(self.m) + ")"

mem = {}
def findTerm(i):
    if i in mem:
        return mem[i]
    else:
        if i == 1:
            mem[i] = Fraction(3, 2)
        else:
            mem[i] = Fraction(1).add( Fraction(1).div( Fraction(1).add( findTerm(i-1) ) ) )

        return mem[i]

def main():
    n = 0
    for i in range(1, 1001):
        f = findTerm(i)
        
        if len(str(f.n)) > len(str(f.m)):
            n += 1

    print(n)

main()

