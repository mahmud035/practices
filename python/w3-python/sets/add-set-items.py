# Python - Add Set Items:

# Add Items:

# IMPORTANT: Once a set is created, you cannot change its items, but you can add new items.

# To add one item to a set use the `add()` method.

# Ex:
# Add an item to a set, using the `add()` method:
fruits = {"apple", "banana", "cherry"}

fruits.add("orange")

print(fruits)

# Add Sets:
# To add items from another set into current set, use the `update()` method.

# Ex:
# Add elements from "tropical" into "fruits":
fruits = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

fruits.update(tropical)

print(fruits)

# Add Any Iterable:
# The object in the `update()` method does not have to be a set, it can be any iterable object (tuples, lists, dictionaries etc.).

# Ex:
# Add elements of a list to at set:
fruits = {"apple", "banana", "cherry"}
myList = ["kiwi", "orange"]

fruits.update(myList)

print(fruits)
