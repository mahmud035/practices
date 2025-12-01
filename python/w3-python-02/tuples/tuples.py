# Python Tuples:

fruits = ("apple", "banana", "cherry")
print(fruits)

# Tuple:
# Tuples are used to store multiple items in a single variable.
# A tuple is a collection which is ordered and "unchangeable"
# Tuples are written with round brackets.

# Ex:
# Create a Tuple:
fruits = ("apple", "banana", "cherry")
print(fruits)

# Tuple Items:
# Tuple items are ordered, unchangeable, and allow duplicate values.
# Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.

# Unchangeable:
# WARNING: Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.

# Tuple Length:
# To determine how many items a tuple has, use the `len()` function:

# Ex:
# Print the number of items in the tuple:
fruits = ("apple", "banana", "cherry")
print(len(fruits))

# Create Tuple With One Item:
# To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.

# Ex:
# WARNING: One item tuple, remember the comma:
fruits = ("apple",)
print(type(fruits))

# NOT a tuple
fruits = "apple"
print(type(fruits))

# Tuple Items - Data Types:
# Tuple items can be of any data type:

# Ex:
# String, int and boolean data types:
tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, True)

# NOTE: A tuple can contain different data types:

# Ex:
# A tuple with strings, integers and boolean values:
tuple4 = ("abc", 34, True, 40, "male")

# IMPORTANT: Python Collections (Arrays):
# There are four collection data types in the Python programming language:

"""
  1. `List` is collection which is ordered and changeable. Allows duplicate members.
  2. `Tuple` is a collection which is ordered and unchangeable. Allows duplicate members.
  3. `Set` is collection which is unordered, unchangeable*, and unindexed. No duplicate members.
  4. `Dictionary` is a collection which is ordered** and changeable. No duplicate members. 
"""

# NOTE: *`Set` items are unchangeable, but you can remove and/or add items whenever you like.
