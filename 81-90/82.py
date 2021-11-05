#
# Project euler 82
#
# Title : Path sum: three ways
# URL   : https://projecteuler.net/problem=82
#

LEN_MATRIX = 80

class Cell:
    def __init__(self, val):
        self.val = val
        self.min = float("inf")

def fillMin(mat, y, x):
    a = mat[y][x]

    for (_y, _x) in ((y-1, x), (y, x+1), (y+1, x)):
        if _y >= 0 and _x >= 0 and _y < LEN_MATRIX and _x < LEN_MATRIX:
            b = mat[_y][_x]

            if b.min > b.val + a.min:
                b.min = b.val + a.min
                fillMin(mat, _y, _x)

def initMat(_mat, startY):
    mat = [ line[::] for line in _mat ]

    for y in range(LEN_MATRIX):
        for x in range(LEN_MATRIX):
            mat[y][x] = Cell(mat[y][x])

    mat[startY][0].min = mat[startY][0].val

    return mat

def minPath(_mat, startY):
    mat = initMat(_mat, startY)
    fillMin(mat, startY, 0)
    
    return min([ mat[y][LEN_MATRIX-1].min for y in range(LEN_MATRIX) ])

def main():
    mat = list(map(lambda l: list(map(int, l.split(","))), open("matrix.txt", "r").readlines()))
    print( min([minPath(mat, y) for y in range(LEN_MATRIX)]) )

main()

