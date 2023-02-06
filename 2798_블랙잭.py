import sys
# sys.stdin = open('input.txt', 'r')
input = sys.stdin.readline

n, m = map(int,input().split())
arr = list(map(int,input().split()))
result = 0
res_arr = []
for i in range(0, n+1):
    for j in range(i+1, n):
        for k in range(j+1, n):
            if arr[i] + arr[j] + arr[k] > m:
                continue
            result = max(result, arr[i] + arr[j] + arr[k])
print(result)