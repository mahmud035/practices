# Python Lists:

myList = ["apple", "banana", "cherry"]

# List:
# Lists are used to store multiple items in a single variable
# `List` are one of the 4 built-in data types in Python used to store collections of data, the other 3 are `Tuple`, `Set`, and `Dictionary`, all with different qualities and usage.

# Lists are created using square brackets:

# Ex:
# Create a list:
fruits = ["apple", "banana", "cherry"]
print(fruits)

# List Items:
# List items are "ordered", "changeable", and "allow duplicate values".
# List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.

# List Length:
# To determine how many items a list has, use the `len()` function.

# Ex:
# Print the number of items in the list:
fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # Output: 3


# List Items - Data Types:
# List items can be of any data type:

# Ex:
# String, int and boolean data types:
list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, True]

# NOTE: A list can contain different data types:

# Ex:
# A list with strings, integers and boolean values:
list4 = ["abc", 34, True, 40, "male"]
print(list4)

# `type()`:
print(type(list4))

# IMPORTANT: Python Collections (Arrays):
# There are four collection data types in the Python programming language:

"""
  1. `List` is collection which is ordered and changeable. Allows duplicate members.
  2. `Tuple` is a collection which is ordered and unchangeable. Allows duplicate members.
  3. `Set` is collection which is unordered, unchangeable*, and unindexed. No duplicate members.
  4. `Dictionary` is a collection which is ordered** and changeable. No duplicate members. 
"""

# NOTE: *`Set` items are unchangeable, but you can remove and/or add items whenever you like.
