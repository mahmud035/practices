# Python - Remove List Items:

# Remove Specified Item:
# The `remove()` method removes the specified item.

# Ex:
# Remove "banana":
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)

# If there are more than one item with the specified value, the `remove()` method removes the first occurrence:

# Ex:
# Remove the first occurrence of "banana":
fruits = ["apple", "banana", "cherry", "banana", "kiwi"]
fruits.remove("banana")
print(fruits)

# Remove Specified Index:
# The `pop()` method removes the specified index.

# Ex:
# Remove the second item:
fruits = ["apple", "banana", "cherry"]
fruits.pop(1)
print(fruits)

# If you do not specify the index, the `pop()` method removes the last item.

# Ex:
# Remove the last item:
fruits = ["apple", "banana", "cherry"]
fruits.pop()
print(fruits)

# Clear the List:
# The `clear()` method empties the list.
# The list still remains, but it has no content.

# Ex:
# Clear the list content:
fruits = ["apple", "banana", "cherry"]
fruits.clear()
print(fruits)
