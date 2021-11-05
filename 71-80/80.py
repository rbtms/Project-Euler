#
# Project euler 80
#
# Title : Square root digital expansion
# URL   : https://projecteuler.net/problem=80
#

import decimal as D

D.getcontext().prec = 110

def main():
    total = 0

    for i in range(101):
        n = D.Decimal(i)

        if n.sqrt() % 1 != 0:
            s = [c for c in str(n.sqrt()) if c != "."][:100]
            total += sum([ int(d) for d in s ])

    print(total)

main()

