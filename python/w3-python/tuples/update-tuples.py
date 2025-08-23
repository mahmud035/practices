# Python - Update Tuples:

# IMPORTANT: Tuples are unchangeable, meaning that you cannot change, add, or remove items once the tuple is created.

# Change Tuple Values:

# IMPORTANT: Once a tuple is created, you cannot change its values. Tuples are "unchangeable", or "immutable" as it also is called.

# NOTE: But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.

# Ex:
# Convert the tuple into a list to be able to change it:
fruitsTuple = ("apple", "banana", "cherry")
fruitsList = list(fruitsTuple)
fruitsList[1] = "kiwi"
fruitsTuple = tuple(fruitsList)

print(fruitsTuple)

# Add Items:
# Since tuples are immutable, they do not have a built-in `append()` method, but there are other ways to add items to a tuple.

# 1. Convert into a list: Just like the workaround for changing a tuple, you can convert it into a list, add your item(s), and convert it back into a tuple.

# Ex:
# Convert the tuple into a list, add "orange", and convert it back into a tuple:
fruitsTuple = ("apple", "banana", "cherry")
fruitsList = list(fruitsTuple)
fruitsList.append("orange")
fruitsTuple = tuple(fruitsList)

print(fruitsTuple)

# 2. Add tuple to a tuple: You are allowed to add tuples to tuples, so if you want to add one item, (or many), create a new tuple with the item(s), and add it to the existing tuple:

# Ex:
tuple1 = ("apple", "banana", "cherry")
tuple2 = ("orange",)
tuple3 = ("pineapple",)

tuple1 = tuple1 + tuple2 + tuple3
print(tuple1)

# WARNING: When creating a tuple with only one item, remember to include a comma after the item, otherwise it will not be identified as a tuple.

# Remove Items:
# NOTE: You cannot remove items in a tuple.
# Tuples are "unchangeable", so you cannot remove items from it, but you can use the same workaround as we used for changing and adding tuple items:

# Ex:
# Convert the tuple into a list, remove "apple", and convert it back into a tuple:
fruitsTuple = ("apple", "banana", "cherry")
fruitsList = list(fruitsTuple)
fruitsList.remove("apple")
fruitsTuple = tuple(fruitsList)

print(fruitsTuple)
