#
# Project euler 60
#
# Title : Prime pair sets
# URL   : https://projecteuler.net/problem=60
#

import math

def isPrime(n):
    if n <= 1                 : return False
    elif n == 2 or n == 3     : return True
    elif n%2 == 0 or n%3 == 0 : return False
    else:
        limit = math.ceil(math.sqrt(n))

        for i in range(5, limit+1, 2):
            if n%i == 0:
                return False

        return True

def genPrimes():
    n = 2

    while True:
        if isPrime(n): yield n
        n += 1

def areValid(p, _p):
    return isPrime(int(p+_p)) and isPrime(int(_p+p))

def findSet(size):
    gen = genPrimes()
    sets = [[] for i in range(size)]

    while not sets[-1]:
        p = str( next(gen) )

        for _p in sets[0]:
            if areValid(p, _p):
                sets[1].append([_p, p])

        sets[0].append(p)

        for i in range(1, size-1):
            sizeset = sets[i]

            for subset in sizeset:
                valid = True

                for _p in subset:
                    if not areValid(p, _p):
                        valid = False
                        break

                if valid:
                    sets[i+1].append(subset + [p])

    print()
    print(sets[size-1])
    print(sum(map(int, sets[size-1][0])))

def main():
    findSet(5)

main()

