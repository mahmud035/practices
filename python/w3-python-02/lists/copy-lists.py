# Python - Copy Lists:

# Copy a List:

# 1. Use the `copy()` method:
# You can use the built-in List method `copy()` to copy a list.

# Ex:
# Make a copy of a list with the `copy()` method:
fruits = ["apple", "banana", "cherry"]
fruitsCopied = fruits.copy()
print(fruitsCopied)

# 2. Use the `list()` method:
# Another way to make a copy is to use the built-in method `list()`.

# Ex:
# Make a copy of a list with the `list()` method:
fruits = ["apple", "banana", "cherry"]
fruitsCopied = list(fruits)
print(fruitsCopied)

# 3. Use the `:`(slice) Operator:
# You can also make a copy of a list by using the `:`(slice) operator.

# Ex:
# Make a copy of a list with the `:` operator:
fruits = ["apple", "banana", "cherry"]
fruitsCopied = fruits[:]
print(fruitsCopied)
