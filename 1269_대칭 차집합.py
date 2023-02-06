import sys
input = sys.stdin.readline

n,m = map(int,input().split())

n_arry = set(map(int,input().split()))
m_arry = set(map(int,input().split()))

n_min = len(n_arry - m_arry)
m_min = len(m_arry - n_arry)

print(n_min + m_min)


# 3 5
# 1 2 4
# 2 3 4 5 6