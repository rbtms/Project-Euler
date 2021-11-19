#
# Project euler 87
#
# Title : Prime power triples
# URL   : https://projecteuler.net/problem=87
#

from math import sqrt

LIMIT = 50000000

def isPrime(n):
    for i in range(2, int(sqrt(n))+1):
        if n % i == 0: return False
    
    return True

def genPrimes():
    n = 2

    while True:
        if isPrime(n):
            yield n

        n += 1

def findNs(gen, primes, pos, left, total, ns):
    if not any(left):
        ns[total] = True
        return
    elif pos >= len(primes):
        return
    else:
        n = primes[pos]

        # Dont include the number
        findNs(gen, primes, pos+1, left, total, ns)

        for i, p in enumerate(left):
            if p is not None and total + n**p <= LIMIT:
                left[i] = None
                findNs(gen, primes, pos, left, total + n**p, ns)
                left[i] = p

def main():
    gen = genPrimes()
    
    # Make a list of somewhat suitable prime numbers
    n = 2
    primes = []

    next(gen)
    while n**2 < LIMIT:
        primes.append(n)
        n = next(gen)

    # Find numbers
    ns = {}
    findNs(gen, primes, 0, [2, 3, 4], 0, ns)
    print(len(ns))

main()

