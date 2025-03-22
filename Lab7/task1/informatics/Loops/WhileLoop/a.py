# n = int(input())
# x = 1
# while x<=n:
#     if x*x<=n:
#         print(x*x)
#     x=x+1

n = int(input())
i = 1
while i<=n:
    if int(i**0.5)**2 == i:
        print(i)
    i += 1