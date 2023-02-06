import sys
input = sys.stdin.readline

n, m = map(int,input().split())
n_list = list(map(int,input().split()))
m_list = list(map(int,input().split()))
sum = n_list + m_list
sum.sort()
print(*sum)



# 2 2
# 3 5
# 2 9