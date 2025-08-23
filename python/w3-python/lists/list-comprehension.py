# Python - List Comprehension:

# List Comprehension:
# List Comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.

# Ex:
# Based on the list of fruits, you want a new list, containing only the fruits with the letter "a" in the name.
# Without list comprehension you will have to write a `for` statement with a conditional test inside:

# Ex:
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newList = []

for fruit in fruits:
    if "a" in fruit:
        newList.append(fruit)

print(newList)

# With list comprehension you can do all that with only one line of code:

# Ex:
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newList = [fruit for fruit in fruits if "a" in fruit]

print(newList)


# The Syntax:
# newList = [expression `for` item `in` iterable `if` condition == `True`]

# The return value is a new list, leaving the old list unchanged.

# Condition:
# The condition is like a filter that only accepts the items that evaluate to `True`.

# Ex:
# Only accept items that are not "apple":
newList = [fruit for fruit in fruits if fruit != "apple"]
print(newList)

# The condition is optional and can be omitted:

# Ex:
# With no `if` statement:
newList = [fruit for fruit in fruits]
print(fruits)


# Iterable:
# The iterable can be any iterable object, like a list, tuple, set etc.

# Ex:
# You can use the `range()` function to create an iterable:
newList = [num for num in range(10)]
print(newList)

# Same example, but with a condition:

# Ex:
# Accept only numbers lower that 5:
newList = [num for num in range(10) if num < 5]
print(newList)

# Expression:
# The expression is the current item in the iteration, but it is also the outcome, which you can manipulate before it ends up like a list item in the new list:

# Ex:
# Set the values in the new list to upper case:
newList = [fruit.upper() for fruit in fruits]
print(newList)

# You can set the outcome to whatever you like:

# Ex:
# Set all values in the new list to "hello":
newList = ["hello" for fruit in fruits]
print(newList)

# The expression can also contain conditions, not like a filter, but as a way to manipulate the outcome:

# Ex:
# Return "orange" instead of "banana":
newList = [fruit if fruit != "banana" else "orange" for fruit in fruits]
print(newList)

# The expression in the example above says:
# "Return the item if it is not banana, if it is banana return orange".
