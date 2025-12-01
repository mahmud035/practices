# Python Sets:

mySet = {"apple", "banana", "cherry"}

# Set:
# Sets are used to store multiple items in a single variable.
# A set is a collection which is unordered, unchangeable*, and unindexed.

# IMPORTANT: Set items are unchangeable, but you can remove items and add new items.

# Sets are written with curly brackets.

# Ex:
# Create a Set:
fruits = {"apple", "banana", "cherry"}
print(fruits)

# NOTE: Sets are unordered, so you cannot be sure in which order the items will appear.

# Set Items:
# Set items are unordered, unchangeable, and do not allow duplicate values.

# Unordered:
# Unordered means that the items in a set do not have a defined order.
# Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

# Unchangeable:
# Set items are unchangeable, meaning that we cannot change the items after the set has been created.

# IMPORTANT: Once a set is created, you cannot change its items, but you can remove items and add new items.

# Duplicates Not Allowed:
# Sets cannot have two items with the same value.

# Ex:
# Duplicate values will be ignored:
fruits = {"apple", "banana", "cherry", "apple"}

print(fruits)

# NOTE:  The values `True` and `1` are considered the same value in sets, and are treated as duplicates:

# Ex:
# `True` and `1` is considered the same value:
mySet = {"apple", "banana", "cherry", True, 1, 2}

print(mySet)

# NOTE: The values `False` and `0` are considered the same value in sets, and are treated as duplicates:

# Ex:
# `False` and `0` is considered the same value:
mySet = {"apple", "banana", "cherry", False, True, 0}

print(mySet)


# Get the Length of a Set:
# To determine how many items a set has, use the `len()` function.

# Ex:
# Get the number of items in a set:
fruits = {"apple", "banana", "cherry"}

print(len(fruits))

# Set Items - Data Types:
# Set items can be of any data type:

# Ex:
# String, int and boolean data types:
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}

# NOTE: A set can contain different data types:

# Ex:
# A set with strings, integers and boolean values:
set4 = {"abc", 34, True, 40, "male"}


# IMPORTANT: Python Collections (Arrays):
# There are four collection data types in the Python programming language:

"""
  1. `List` is collection which is ordered and changeable. Allows duplicate members.
  2. `Tuple` is a collection which is ordered and unchangeable. Allows duplicate members.
  3. `Set` is collection which is unordered, unchangeable*, and unindexed. No duplicate members.
  4. `Dictionary` is a collection which is ordered** and changeable. No duplicate members. 
"""

# NOTE: *`Set` items are unchangeable, but you can remove and/or add items whenever you like.
