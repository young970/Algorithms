import sys
# sys.stdin = open('input.txt','r')
input = sys.stdin.readline

n = int(input())
m = int(input())
cnt = 0

graph = [[]for i in range(n+1)]
visited = [False]*(n+1)
for i in range(m):
    a, b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

def dfs(graph, start, visited):
    global cnt

    for i in graph[start]:
        if visited[i] == False:
            visited[i] = True
            cnt += 1
            dfs(graph, i, visited)

dfs(graph, 1, visited)
print(cnt-1)