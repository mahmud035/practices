# Python - Sort Lists:

# Sort List Alphanumerically:
# List objects have a `sort()` method that will sort the list alphanumerically, ascending, by default:

# Ex:
# Sort the list alphabetically:
fruits = ["orange", "mango", "kiwi", "pineapple", "banana"]
fruits.sort()
print(fruits)

# Ex:
# Sort the list numerically:
numbers = [100, 50, 65, 82, 23]
numbers.sort()
print(numbers)

# Sort Descending:
# To sort descending, use the keyword argument `reverse = True`:

# Ex:
# Sort the list descending:
fruits = ["orange", "mango", "kiwi", "pineapple", "banana"]
fruits.sort(reverse=True)
print(fruits)

# Ex:
# Sort the list descending:
numbers = [100, 50, 65, 82, 23]
numbers.sort(reverse=True)
print(numbers)

# Case Insensitive Sort:
# By default the `sort()` method is case sensitive, resulting in all capital letters being sorted before lower case letters:

# Ex:
# WARNING: Case sensitive sorting can give an unexpected result:
fruits = ["banana", "Orange", "Kiwi", "cherry"]
fruits.sort()
print(fruits)

# Luckily we can use built-in functions as key functions when sorting a list.
# So if you want a case-insensitive sort function, use str.lower as a key function:

# Ex:
# TODO: Perform a case-insensitive sort of the list:
fruits = ["banana", "Orange", "Kiwi", "cherry"]
fruits.sort(key=str.lower)
print(fruits)

# Reverse Order:
# What if you want to reverse the order of a list, regardless of the alphabet?
# The `reverse()` method reverses the current sorting order of the elements:

# Ex:
# Reverse the order of the list items:
fruits = ["banana", "Orange", "Kiwi", "cherry"]
fruits.reverse()
print(fruits)
