#
# Project euler 86
#
# Title : Cuboid route
# URL   : https://projecteuler.net/problem=86
#

from math import sqrt

def dist(w, d, h):
    return sqrt(w**2 + (d+h)**2)

def main():
    M = 1818
    total = 0

    for w in range(1, M+1):
        for d in range(w, M+1):
            for h in range(d, M+1):
                n = dist(h, d, w)

                if n.is_integer():
                    total += 1

    print(total)

main()

