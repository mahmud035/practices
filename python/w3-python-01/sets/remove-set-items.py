# Python - Remove Set Items:

# Remove Item:
# NOTE: To remove an item in a set, use the `remove()`, or the `discard()` method.

# Ex:
# Removes "banana" by using the `remove()` method:
fruits = {"apple", "banana", "cherry"}

fruits.remove("banana")

print(fruits)

# WARNING: 🔴 If the item to remove does not exist, `remove()` will raise an error.

# Ex:
# Remove "banana" by using the `discard()` method:
fruits = {"apple", "banana", "cherry"}

fruits.discard("banana")

print(fruits)

# NOTE: ✅ If the item to remove does not exist, `discard()` will NOT raise an error.

# Ex:
# The `clear()` method empties the set:
fruits = {"apple", "banana", "cherry"}

fruits.clear()

print(fruits)
