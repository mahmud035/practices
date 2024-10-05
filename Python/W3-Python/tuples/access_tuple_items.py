# Python - Access Tuple Items:

# Access Tuple Items:
# You can access tuple items by referring to the index number, inside square brackets:

# Ex:
# Print the second item in the tuple:
fruits = ("apple", "banana", "cherry")
print(fruits[1])

# NOTE: The first item has index 0.

# Negative Indexing:
# Negative indexing means start from the end.
# `-1` refers to the last item, `-2` refers to the second last item etc.

# Ex:
# Print the last item of the tuple:
fruits = ("apple", "banana", "cherry")
print(fruits[-1])

# Range of Indexes:
# You can specify a range of indexes by specifying where to start and where to end the range.
# When specifying a range, the return value will be a new tuple with the specified items.

# Ex:
# Return the third, fourth, and fifth item:
fruits = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")

print(fruits[2:5])

# NOTE: The search will start at index 2 (included) and end at index (not included).

# By leaving out the start value, the range will start at the first item:

# Ex:
# This example returns the items from the beginning to, but NOT included, "kiwi":
fruits = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")

print(fruits[:4])

# By leaving out the end value, the range will go on to the end of the tuple:

# Ex:
# This example returns the items from "cherry" and to the end:
fruits = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")

print(fruits[2:])

# Range of Negative Indexes:
# Specify negative indexes if you want to start the search from the end of the tuple:

# Ex:
# This example returns the items from index -4 (included) to index -1 (excluded)
fruits = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")

print(fruits[-4:-1])

# Check if Item Exists:
# To determine if a specified item is present in a tuple use the `in` keyword:

# Ex:
# Check if "apple" is present in the tuple:
fruits = ("apple", "banana", "cherry")
if "apple" in fruits:
    print("Yes, 'apple' is in the fruits tuple")
