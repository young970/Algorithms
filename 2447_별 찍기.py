import sys
# sys.stdin = open('input.txt','r')
input = sys.stdin.readline
n = int(input())

def star(x):
    if x == 3:
        return ['***','* *','***']
    arr = star(x//3)
    stars = []
    for i in arr:
        stars.append(i*3)
    for j in arr:
        stars.append(j+' '*(x//3)+j)
    for k in arr:
        stars.append(k*3)
    return stars

print('\n'.join(star(n)))
