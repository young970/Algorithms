from collections import deque
import sys
# sys.stdin = open('input.txt','r')
input = sys.stdin.readline

n = int(input())
m = int(input())
graph = [[]for _ in range(n+1)]
visited = [False] * (n+1)
cnt = 0

for i in range(m):
    a, b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(graph, start):
    global cnt
    queue = deque([start])

    while queue:
        pop = queue.popleft()
        visited[pop] = True

        for i in graph[pop]:
            if visited[i] == False:
                visited[i] = True
                queue.append(i)
                cnt += 1
    print(cnt)

bfs(graph,1)