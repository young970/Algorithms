def solution(s, skip, index):
    alpa = "abcdefghijklmnopqrstuvwxyz"
    answer = ''
    for i in list(skip):
        alpa = alpa.replace(i, "")

    for j in s:
        answer += alpa[(alpa.find(j) + index) % len(alpa)]
    print(answer)
    return answer


s = "aukks"
skip = "wbqd"
index = 5
result = "happy"
solution(s, skip, index)