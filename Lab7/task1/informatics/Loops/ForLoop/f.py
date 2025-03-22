# x = int(input())
#
# if x == 0:
#     print(0)
# else:
#     while x % 10 == 0:
#         x //= 10
#
#     while x > 0:
#         print(x % 10, end="")
#         x //= 10
# x = int(input())
# reversed_number = 0
# for i in range(x):
#     if x == 0:
#         break
#     reversed_number = reversed_number * 10 + (x % 10)  # Добавляем последнюю цифру
#     x //= 10
# print(reversed_number)
x = input()
ind = 0
for i in range(len(x)-1, -1, -1):
    if x[i] != '0':
        ind = i
        break
for i in range(ind, -1, -1):
    print(x[i], end='')