# N = int(input())
# print(sum(int(input()) for _ in range(N)))
N = int(input())
sum = 0
for i in range(N):
    sum += int(input())
print(sum)