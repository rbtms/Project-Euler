#
# Project euler 79
#
# Title : Passcode derivation
# URL   : https://projecteuler.net/problem=79
#

def main():
    ns = list(map(lambda l: l.strip(), open("keylog.txt", "r").readlines()))
    pwd = ""

    while ns:
        possible = []

        for n in ns:
            # Add first digit to possible
            if n[0] not in possible:
                possible.append(n[0])

            # Remove the rest from possible digits if
            # theyre not the first
            for m in n[1:]:
                if m in possible:
                    possible.remove(m)

        # Remove the password digit from the first
        # position of all numbers
        d = possible[0]
        for i, n in enumerate(ns):
            if n[0] == d:
                ns[i] = n[1:]

        # Remove strings with length 0
        ns = list(filter(len, ns))

        # Add digit to password
        pwd += d

    print(pwd)

main()

