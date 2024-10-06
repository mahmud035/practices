# Python Dictionaries:

myDictionaries = {"brand": "Ford", "model": "Mustang", "year": 1964}

# Dictionary:
# Dictionaries are used to store data values in key:value pairs.
# A dictionary is a collection which is ordered*, changeable and do not allow duplicates.
# Dictionaries are written with curly brackets, and have keys and values:

# Ex:
# Create and print a dictionary:
myDictionaries = {"brand": "Ford", "model": "Mustang", "year": 1964}
print(myDictionaries)

# Dictionary Items:
# Dictionary items are ordered, changeable, and do not allow duplicates.
# Dictionary items are presented in key:value pairs, and can be referred to by using the key name.

# Ex:
# Print the "brand" value of the dictionary:
myDictionaries = {"brand": "Ford", "model": "Mustang", "year": 1964}

print(myDictionaries["brand"])

# Ordered or Unordered?
# When we say that dictionaries are ordered, it means that the items have a defined order, and that order will not change.
# Unordered means that the items do not have a defined order, you cannot refer to an item by using an index.

# Changeable:
# Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.

# Duplicates Not Allowed:
# Dictionaries cannot have two items with the same key:

# Ex:
# Duplicate values will overwrite existing values:
myDictionaries = {"brand": "Ford", "model": "Mustang", "year": 1964, "year": 2020}

print(myDictionaries)

# Dictionary Length:
# To determine how many items a dictionary has, use the l`en()` function:

# Ex:
# Print the number of items in the dictionary:
myDictionaries = {"brand": "Ford", "model": "Mustang", "year": 1964}

print(len(myDictionaries))

# Dictionary Items - Data Types:
# The values in dictionary items can be of any data type:

# Ex:
# String, int, boolean, and list data types:
myDictionaries = {
    "brand": "Ford",
    "electric": False,
    "year": 1964,
    "colors": ["red", "white", "blue"],
}

print(myDictionaries)
print(type(myDictionaries))


# IMPORTANT: Python Collections (Arrays):
# There are four collection data types in the Python programming language:

"""
  1. `List` is collection which is ordered and changeable. Allows duplicate members.
  2. `Tuple` is a collection which is ordered and unchangeable. Allows duplicate members.
  3. `Set` is collection which is unordered, unchangeable*, and unindexed. No duplicate members.
  4. `Dictionary` is a collection which is ordered** and changeable. No duplicate members. 
"""

# NOTE: *`Set` items are unchangeable, but you can remove and/or add items whenever you like.
