# Python - Loop Lists:

# Loop Through a List:
# You can loop through the list items by using a `for` loop:

# Ex:
# Print all items in the list, one by one:
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)


# Loop Through the Index Numbers:
# You can also loop through the list items by referring to their index number.
# Use the `range()` and `len()` function to create a suitable iterable.

# Ex:
# Print all items by referring to their index number:
fruits = ["apple", "banana", "cherry"]
for i in range(len(fruits)):
    print(fruits[i])

# The iterable created in the example above is `[0, 1, 2]`

# Using a While Loop:
# You can loop through the list items by using a `while` loop
# Use the `len()` function to determine the length of the list, then start at 0 and loop your way through the list items by referring to their indexes.
# Remember to increase the index by 1 after each iteration.

# Ex:
# Print all items, using a `while` loop to go through all the index numbers
fruits = ["apple", "banana", "cherry"]
i = 0
while i < len(fruits):
    print(fruits[i])
    i += 1


# Looping Using List Comprehension:
# List Comprehension offers the shortest syntax for looping through lists:

# Ex:
# A short hand `for` loop that will print all items in a list
fruits = ["apple", "banana", "cherry"]
[print(fruit) for fruit in fruits]
