# a = 29
# if a < 10:
#     if (a % 2) == 0:
#         print('less, yes')
#     else:
#         print('less, no')
# else:
#     if (a % 3) == 0:
#         print('greater, yes')
#     else:
#         print('greater, no')

# a = None  # 0 , null / None return False
# if a:
#     print(True)
# else:
#     print(False)

# a = [1, 2, 3]
# # b = a
# # print(b is a)
# # print(b == a)

# b = a[:]
# print(b is a)
# print(b == a)

# Problem 1
# number = int(input('Please enter an input: '))

# if (number % 3) == 0 and (number % 5) == 0:
#     print('Yes')
# else:
#     print('No')     

# Problem 2
# number = float(input('Please enter a number: '))

# if (number > 0):
#   print('Positive')
# elif (number < 0):
#   print('Negative')
# else:
#   print('Zero')

# Problem 3
# number = int(input('Please enter a number: '))

# if (number % 2) == 0:
#   print('Even')
# else:
#   print('Odd')  

# # Problem 4
# print('Please enter the character')
# character = input()

# if character >= 'a' and character <= 'z':
#   print('Lower Case')
# elif character >= 'A' and character <= 'Z':
#   print('Upper Case') 
# else:
#   print('Nothing')  

# Problem 5
# print('Please enter an input')
# character = input()

# if character >= 'a' and character <= 'z' or character >= 'A' and character <= 'Z':
#   if character in 'aeiouAEIOU':
#     print('Vowel')
#   else:
#     print('Consonant')
# else:
#   print('Nothing')      

# Problem 6
a = int(input('Please input your a: '))

b = a
temp = a // 1000
print(temp, '1000 Taka note(s).')

if temp > 0:
  a = a % 1000
  b = a
else:
  a = b

temp = a // 500
print(temp, '500 Taka note(s).')

if temp > 0:
  a = a % 500
  b = a
else:
  a = b
  





    