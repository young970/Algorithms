import sys
# sys.stdin = open('input.txt','r')
input = sys.stdin.readline

n = int(input())
n_array = list(map(int,input().split()))
m = int(input())
m_array = list(map(int,input().split()))
n_array.sort()

def binary_search(target, start, end):
    while start <= end:
        mid = (start + end) // 2

        if n_array[mid] == target:
            return n_array[mid]
        elif n_array[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return None

for i in range(m):
    if binary_search(m_array[i], 0, n-1) is not None:
        print(1, end=' ')
    else:
        print(0, end=' ')