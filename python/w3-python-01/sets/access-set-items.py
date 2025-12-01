# Python - Access Set Items:

# Access Items:

# WARNING: You cannot access items in a set by referring to an index or a key.

# NOTE: But you can loop through the set items using a `for` loop, or ask if a specified value is present in a set, by using the `in` keyword.

# Ex:
# Loop through the set, and print the values:
fruits = {"apple", "banana", "cherry"}

for fruit in fruits:
    print(fruit)

# Ex:
# Check if "banana" is present in the set:
fruits = {"apple", "banana", "cherry"}

print("banana" in fruits)

# Ex:
# Check if "banana" is NOT present in the set:
fruits = {"apple", "banana", "cherry"}

print("banana" not in fruits)

# Change Items:

# IMPORTANT: Once a set is created, you cannot change its items, but you can add new items.
