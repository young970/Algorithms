n = input()

if n[:2] == "0x":
    num = n[2:]
    print(int(num,16))
elif n[:1] == "0":
    num = n[1:]
    print(int(num,8))
else:
    print(int(n))