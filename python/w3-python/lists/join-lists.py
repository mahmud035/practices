# Python - Join Lists:

# Join Two Lists:
# There are several ways to join, or concatenate, two or more lists in Python.

# 1. One of the easiest ways are by using the `+` operator.

# Ex:
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)


# 2. Another way to join two lists is by appending all the items from list2 into list1, one by one:

# Ex:
# Append list2 into list1:
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

for item in list2:
    list1.append(item)

print(list1)

# 3. Or you can use the `extend()` method, where the purpose is to add elements from one list to another list:

# Ex:
# Use the `extend()` method to add list2 at the end of list1:
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print(list1)
