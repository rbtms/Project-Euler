#
# Project euler 97
#
# Title : Large Non-Mersenne Prime
# URL   : https://projecteuler.net/problem=97
#

res = (28433 * (2**7830457 % 10**10) + 1) % 10**10
print(res)
