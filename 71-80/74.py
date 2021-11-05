#
# Project euler 74
#
# Title : Digit factorial chains
# URL   : https://projecteuler.net/problem=74
#

from math import factorial

mem = {}
def digitFactorial(n):
    if n not in mem:
        mem[n] = sum([factorial(int(d)) for d in str(n)])

    return mem[n]

def findSeqLen(n):
    past = {}
    pos = 0

    while n not in past:
        past[n] = pos
        n = digitFactorial(n)
        pos += 1

    return pos

def main():
    print(len([ True for n in range(1000000) if findSeqLen(n) == 60]))

main()

