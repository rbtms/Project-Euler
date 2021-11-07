#
# Project euler 85
#
# Title : Counting rectangles
# URL   : https://projecteuler.net/problem=85
#

def findRectangles(h, w):
    total = 0

    for _h in range(1, h+1):
        for _w in range(1, w+1):
            # Horizontal places * vertical places
            total += (w-_w+1) * (h-_h+1)

    return total

def main():
    target = 2000000
    minH, minW = 0, 0
    minDist = float("inf")

    for h in range(100):
        for w in range(100):
            n = findRectangles(h, w)
            
            if abs(n-target) < minDist:
                minDist = abs(n-target)
                minH, minW = h, w

    print((minH, minW), minH*minW)

main()

