import sys
# sys.stdin = open('input.txt', 'r')
input = sys.stdin.readline

n = int(input())
result = 0
for i in range(1,n+1):
    parts = list(map(int,str(i)))
    result = i + sum(parts)
    if result == n:
        print(i)
        break
    if i == n:
        print(0)