#
# Project euler 92
#
# Title : Square Digit Chains
# URL   : https://projecteuler.net/problem=92
#

def square_sum(n):
    """Add the square of each digit of n"""
    res = 0

    while n != 0:
        res += (n%10)**2
        n //= 10

    return res

def does_chain_arrive_to_89(n):
    """
    Search if the chain starting in a given number
    n reaches 89 at some point
    """
    seen = set()

    while n != 1:
        if n == 89:
            return True
        elif n in seen:
            return False
        else:
            seen.add(n)
            n = square_sum(n)

    return False


# Calculate how many chains under 10.000.000 end on 89
res = 0
for n in range(1, 10_000_000):
    if does_chain_arrive_to_89(n):
        res += 1

print(res)

