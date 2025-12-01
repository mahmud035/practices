# Strings:
# Square brackets can be used to access elements of the string:

# Ex:
# Get the character at position 1 (remember that the first character has the position 0)
a = "Hello, World!"
print(a[0])

# Looping Through a String:
# Since strings are array, we can loop through the characters in a string, with a `for` loop.

# Ex:
for char in "apple":
    print(char)

# String Length:
# To get the length of a string, use the `len()` function.

# Ex:
# The `len()` function returns the length of a string:
a = "Hello, World!"
print(len(a))

# Check String:
# To check if a certain phrase or character is present in a string, we can use the keyword `in`.

# Ex:
# Check if "free" is present in the following text:
text = "The best things in life are free!"
print("free" in text)

# Use it in a `if` statement:

# Ex:
# Print only if "free" is present:
text = "The best things in life are free!"
if "free" in text:
    print("Yes, 'free' is present.")


# Check if NOT:
# To check if a certain phrase or character is NOT present in a string, we can use the keyword `not in`.

# Ex:
# Check if "expensive" is NOT present in the following text:
text = "The best things in life are free!"
print("expensive" not in text)

# Use it in an `if` statement:

# Ex:
# print only if "expensive" is NOT present:
text = "The best things in life are free!"
if "expensive" not in text:
    print("No, 'expensive' is NOT present.")
