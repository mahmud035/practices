# Python - Join Sets:

# Join Sets:

"""
# IMPORTANT: There are several ways to join two or more sets in Python.

# The `union()` and `update()` methods joins all the items from both sets.

# The `intersection()` method keeps ONLY the duplicates.

# The `difference()` method keeps the items from the first set that are not in the other set(s).

# The `symmetric_difference()` method keeps all items EXCEPT the duplicates.
"""

# Union:
# The `union()` method returns a new set with all items from both sets.

# Ex:
# Join set1 and set2 into a new set:
from traceback import print_tb


set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)

# You can use the `|` operator instead of the `union()` method, and you will get the same result.

# Ex:
# Use `|` to join two sets:
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1 | set2
print(set3)

# Join Multiple Sets:
# All the joining methods and operators can be used to join multiple sets.
# When using a method, just add more sets in the parentheses, separated by commas:

# Ex:
# Join multiple sets with the `union()` method:
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

mySet = set1.union(set2, set3, set4)
print(mySet)

# When using the `|` operator, separate the sets with more `|` operators:

# Ex:
# Use `|` to join two sets:
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

mySet = set1 | set2 | set3 | set4
print(mySet)

# Join a Set and a Tuple:
# The `union()` method allows you to join a set with other data types, like lists or tuples.
# The result will be a set.

# Ex:
# Join a set with a tuple:
mySet = {"a", "b", "c"}
myTuple = (1, 2, 3)

joinSetWithTuple = mySet.union(myTuple)
print(joinSetWithTuple)

# NOTE: The `|` operator only allows you to join sets with sets, and not with other data types like you can with the  `union()` method.

# Update:
# The `update()` method inserts all items from one set into another.
# The `update()` changes the original set, and does not return a new set.

# Ex:
# The `update()` method inserts the items in set2 into set1:
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)

# NOTE: Both `union()` and `update()` will exclude any duplicate items.

# Intersection:
# Keep ONLY the duplicates
# The `intersection()` method will return a new set, that only contains the items that are present in both sets.

# Ex:
# Join set1 and set2, but keep only the duplicates:
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.intersection(set2)
print(set3)

# You can use the `&` operator instead of the `intersection()` method, and you will get the same result.

# Ex:
# Use `&` to join two sets:
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 & set2
print(set3)

# NOTE: The `&` operator only allows you to join sets with sets, and not with other data types like you can with the `intersection()` method.

# Difference:
# The `difference()` method will return a new set that will contain only the items from the first set that are not present in the other set.

# Ex:
# Keep all items from set1 that are not in set2:
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.difference(set2)
print(set3)

# You can use the `-` operator instead of the `difference()` method, and you will get the same result.

# Ex:
# Use - to join two sets:
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 - set2
print(set3)

# Symmetric Differences:
# The `symmetric_difference()` method will keep only the elements that are NOT present in both sets.

# Ex:
# Keep the items that are not present in both sets:
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.symmetric_difference(set2)
print(set3)

# You can use the `^` operator instead of the `symmetric_difference()` method, and you will get the same result.

# Ex:
# Use ^ to join two sets:
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 ^ set2
print(set3)
