# Python - Add List Items:

# Append Items:
# To add an item to the end of the list, use the `append()` method:

# Ex:
# Using the `append()` method to append an item:
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)


# Insert Items:
# To inset a list item at a specified index, use the `insert()` method.
# The `insert()` method insets an item at the specified index:

# Ex:
# Insert an item as the second position:
fruits = ["apple", "banana", "cherry"]
fruits.insert(1, "orange")
print(fruits)

# Extend List:
# To append elements from another list to the current list, use the `extend()` method.

# Ex:
# Add the elements of "tropical" to "fruits":
fruits = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
fruits.extend(tropical)
print(fruits)

# The elements will be added to the end of the list.

# Add Any Iterable:
# The `extend()` method does not have to append lists, you can add any iterable object (tuples, sets, dictionaries etc.)

# Ex:
# Add elements of a tuple to a list:
fruits = ["apple", "banana", "cherry"]
myTuple = ["kiwi", "orange"]
fruits.extend(myTuple)
print(fruits)
