# print(int(input(), 2))

b = input()
ind = len(b)-1
num = 0
for i in b:
    if i == '1':
        num += 2**ind * int(i)
    ind-=1
print(num)