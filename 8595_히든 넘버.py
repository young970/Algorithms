import sys
input = sys.stdin.readline

n = int(input())

nums = input()

result = []
tempcount = ""
compare = ['0','1','2','3','4','5','6','7','8','9']

for i in nums:
    if i not in compare:
        if len(tempcount) < 7 and len(tempcount) != 0:
            result.append(int(tempcount))
        tempcount = ""
        continue
    tempcount += i

if len(tempcount) < 7 and len(tempcount) > 0:
            result.append(int(tempcount))
            tempcount = ""

print(sum(result))