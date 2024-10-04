# Python - Modify Strings:
# Python has a set of built-in methods that you can use on strings.

# Upper Case:

# Ex:
# The `upper()` method returns the string in upper case:
string = "Hello, World!"
print(string.upper())

# Lower Case:

# Ex:
# The `lower()` method returns the string in lower case:
string = "Hello, World!"
print(string.lower())

# Remove Whitespace:

# Ex:
# The `strip()` method removes any whitespace from the beginning or the end:
string = " Hello, World! "
print(string.strip())  # returns "Hello, World!"

# Replace String:

# Ex:
# The `replace()` method replaces a string with another string:
string = "Hello, World!"
print(string.replace("H", "J"))


# Split String:
# The `split()` method returns a list where the text between the specified separator becomes the list items.

# Ex:
# The `split()` method splits the string into substrings if it finds instances of the separator:
string = "Hello, World!"
print(string.split(","))  # returns ['Hello', ' World!']
