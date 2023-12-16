#  Creating  a list
a = ['onion', 'potato', 'ginger', 'cucumber']
print(a)
print(type(a))

b = ['onion', 'potato', 'ginger', 'cucumber', 1, 3.1416]
print(type(b))

#  Access element of a list
#  Syntax: list_name[index number]
print(b[0])
print(b[3])
print(b[1:5])
print(b[:5])
print(b[2:])

print(type(b[0]))
print(type(b[4]))

b.insert(1, 'python')
print(b)
b.extend(['a', 'b', 'c'])
print(b)

#  Adding multiple list
number = [1, 2, 3, 4, 5]
day = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']
result_list = b + number + day
print(result_list)

#  Deleting elements of a list
result_list.remove('python')
print(result_list)

del result_list[0]
print(result_list)

del result_list[-1]
print(result_list)

result_list.pop()
print(result_list)

result_list.pop()
print(result_list)


b = ['onion', 'potato', 'ginger', 'cucumber', 1, 3.1416]
print(len(b))
print(b.count('potato'))

c = ['potato', 'a', 'b', 'potato', 'potato']
print(c.count('potato'))

b.reverse()
print(b)








































