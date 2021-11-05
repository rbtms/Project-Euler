#
# Project euler 81
#
# Title : Path sum: two ways
# URL   : https://projecteuler.net/problem=81
#

LEN_MATRIX = 80

def findLowestPath(mat):
    for y in reversed(range(LEN_MATRIX)):
        for x in reversed(range(LEN_MATRIX)):
            mins = []

            if y+1 < LEN_MATRIX: mins.append(mat[y+1][x])
            if x+1 < LEN_MATRIX: mins.append(mat[y][x+1])

            if mins: mat[y][x] = mat[y][x] + min(mins)

    return mat[0][0]

def main():
    mat = list(map(lambda l: list(map(int, l.split(","))), open("matrix.txt", "r").readlines()))
    print( findLowestPath(mat) )

main()

