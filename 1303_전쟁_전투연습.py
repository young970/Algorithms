from collections import deque
import sys
# sys.stdin = open('input.txt','r')
input = sys.stdin.readline

n, m = map(int,input().split())
graph = [list(input())for _ in range(m)]
visited = [[False]*n for _ in range(m)]

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def bfs(x, y, color):
    cnt = 0
    queue = deque()
    queue.append([x, y])
    visited[x][y] = True
    while queue:
        x, y = queue.popleft()
        cnt += 1
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < m and 0 <= ny < n:
                if graph[nx][ny] == color and visited[nx][ny] == False:
                    visited[nx][ny] = True
                    queue.append([nx, ny])
    return cnt

white, blue = 0, 0
for i in range(m):
    for j in range(n):
        if graph[i][j] == 'W' and visited[i][j] == False:
            white += bfs(i, j, 'W')**2
        elif graph[i][j] == 'B' and visited[i][j] == False:
            blue += bfs(i, j, 'B')**2
print(white, blue)