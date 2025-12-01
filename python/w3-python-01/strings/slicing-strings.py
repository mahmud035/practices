# Python - Slicing Strings:
# You can return a range of characters by using the slice syntax.
# Specify the start index and the end index, separated by a colon, to return a part of the string.

# Ex:
# Get the characters from position 7 to position 12 (not included):
string = "Hello, World!"
slicedStr = string[7:12]
print(slicedStr)

# Slice From the Start:
# By leaving out the start index, the range will start at the first character:

# Ex:
# Get the characters from the start to position 5 (not included)
string = "Hello, World!"
slicedStr = string[:5]
print(slicedStr)

# Slice To the End:
# By leaving out the end index, the range will go to the end:

# Ex:
# Get the characters from position 2, and all the way to the end:
string = "Hello, World!"
slicedStr = string[2:]
print(slicedStr)

# Negative Indexing:
# Use negative indexes to start the slice from the end of the string:

# Ex:
# Get the characters:
# From "o" in "World!" (position -5)
# To, but not included: "d" in "World!" (position -2)
string = "Hello, World!"
slicedStr = string[-5:-2]
print(slicedStr)
