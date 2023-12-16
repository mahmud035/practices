A = {'orange', 'banana', 'pear', 'apple', 'orange', 'banana'}
print(A)
print(type(A))

A = set('abacadcccabaab')
print(A)
print(type(A))


A = set()
print(type(A))

A = {}
print(A)
print(type(A))

A = {'orange', 'banana', 'pear', 'apple', 'orange', 'banana'}

#  ADD element to a set
A.add('pineapple')
print(A)

A.update('berry', 'grape')
print(A)

A.update({'berry', 'grape'})
print(A)

#  DELETE element of a set
A = {'orange', 'banana', 'pear', 'apple', 'orange', 'banana'}
A.discard('apple')
print(A)

A.discard('berry')
print(A)

A = {'orange', 'banana', 'pear', 'apple', 'orange', 'banana'}
print(A)
A.pop()  # Remove first element
print(A)
print(A.pop())

A.clear()
print(A)

#  UNION
A = {1, 2, 3, 4, 5}
B = {6, 7, 8}
print(A.union(B))

#  INTERSECTION
A = {1, 2, 3, 4, 5}
B = {2, 3, 4, 5, 6, 7}
print(A.intersection(B))

#  DIFFERENCE
A = {1, 2, 3, 4, 5, 6}
B = {5, 6, 7, 8}
print(B.difference(A))




























