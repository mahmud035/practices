# Python - String Methods:
# Python has a set of built-in methods that you can use on string.
# NOTE: All string methods return new values. They do not change the original string.


# `capitalize()` => The `capitalize()` method returns a string where the first character is upper case, and the rest is lower case.

# Ex:
text = "hello, and welcome to my world."
capitalizedText = text.capitalize()
print(capitalizedText)

# `casefold()` => Converts string into lower case.

# Ex:
text = "Hello, And Welcome To My World!"
print(text.casefold())

# `center()` => The `center()` method will center align the string, using a specified character (space is default) as the fill character.

# Ex:
text = "banana"
print(text.center(20, "O"))

# `count()` => Returns the number of times a specified value occurs in a string.

# Ex:
text = "I love apples, apple are my favorite fruit"
print(text.count("apple"))

# `startswith()` => Returns True if the string starts with the specified value.

# Ex:
text = "Hello, welcome to my world."
print(text.startswith("Hello"))

# `endswith()` => Returns true if the string ends with the specified value.

# Ex:
text = "Hello, welcome to my world"
print(text.endswith("world"))

# `find()` => Searches the string for a specified value and "returns the position" of where it was found. Returns -1 if the value is NOT found.

# Ex:
text = "Hello, welcome to my world."
print(text.find("welcome"))

# `index()` => Searches the string for a specified value and "returns the position" of where it was found. Throws an error if the value is NOT found.

# Ex:
text = "Hello, welcome to my world."
print(text.find("welcome"))

# `islower()` => Returns True if all characters in the string are lower case.

# Ex:
text = "hello world!"
print(text.islower())

# `isupper()` => Returns True if all characters in the string are upper case.

# Ex:
test = "THIS IS NOW!"
print(text.isupper())

# `isnumeric()` => Returns True if all characters in the string are numeric (0-9), otherwise False.

# Ex:
text = "565543"
print(text.isnumeric())

# `join()` => The `join()` method takes all items in an iterable and joins them into one string.
# A string MUST be specified as the separator.

# Ex:
myTuple = ("John", "Peter", "Vicky")
print("**".join(myTuple))

# `split()` => Splits the string at the specified separator, and returns a list.

# Ex:
text = "welcome to the jungle"
print(text.split(" "))

# `strip()` => Returns a trimmed version of the string.

# Ex:
text = "     banana     "
print(text.strip())

# `swapcase()` => The `swapcase()` method returns a string where all the upper case letters are lower case and vice versa.

# Ex:
text = "Hello My Name Is PETER"
print(text.swapcase())

# `upper()` => Converts a string into upper case.

# Ex:
text = "Hello my friends"
print(text.upper())

# `lower()` => Converts a string into lower case.

# Ex:
text = "Hello my FRIENDS"
print(text.lower())
