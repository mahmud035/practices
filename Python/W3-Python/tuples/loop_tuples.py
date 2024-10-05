# Python - Loop Tuples:

# 1. Loop Through a Tuple:
# You can loop through the tuple items by using a `for` loop.

# Ex:
# Iterate through the items and print the values:
fruits = ("apple", "banana", "cherry")

for fruit in fruits:
    print(fruit)

# 2. Loop Through the Index Numbers:
# You can also loop through the tuple items by referring to their index number.
# Use the `range()` and `len()` functions to create a suitable iterable.

# Ex:
# Print all items by referring to their index number:
fruits = ("apple", "banana", "cherry")

for i in range(len(fruits)):
    print(fruits[i])

# 3. Using a While Loop:
# You can loop through the tuple items by using a `while` loop.
# Use the `len()` function to determine the length of the tuple, then start at 0 and loop your way through the tuple items by referring to their indexes.
# Remember to increase the index by 1 after each iteration.

# Ex:
# Print all items, using a `while` loop to go through all the index numbers:
fruits = ("apple", "banana", "cherry")
i = 0

while i < len(fruits):
    print(fruits[i])
    i += 1
