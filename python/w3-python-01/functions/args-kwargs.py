# Python *args and **kwargs

# *args and **kwargs:

# By default, a function must be called with the correct number of arguments.

# However, sometimes you may not know how many arguments that will be passed into your function.

# *args and **kwargs allow functions to accept a unknown number of arguments.

# Arbitrary Arguments, *args:

# If you do not know how many arguments that will be passed into your function, add a `*` before the parameter name in the function definition.

# This way the function will receive a "tuple of arguments", and can access the items accordingly:


# Ex:
# Using *args to accept any number of arguments:
def my_function(*kids):
    print(kids)  # ('Emil', ' Tobias', 'Linus')
    print(f"The youngest child is {kids[2]}")


my_function("Emil", " Tobias", "Linus")
my_function("John", "Alex", "Smith", "Lee")

# NOTE: Arbitrary Arguments are often shortened to "*args" in Python documentations.

# What is *args?

# The *args parameter allows a function to accept any number of positional arguments.

# Inside the function, `args` becomes a tuple containing all the passed arguments:


# Ex:
# Accessing individual arguments from *args:
def my_function(*args):
    print(f"Type: {type(args)}")
    print(f"First argument: {args[0]}")
    print(f"Second argument: {args[1]}")
    print(f"All arguments: {args}")


my_function("Emil", "Tobias", "Linus")

# Using *args with Regular Arguments

# You can combine regular parameters with *args.

# Regular parameters must come before *args:


def my_function(greeting, *names):
    for name in names:
        print(greeting, name)


my_function("Hello", "Emil", "Tobias", "Linus")

# In this example, "Hello" is assigned to greeting, and the rest are collected in names.

# Practical Example with *args:

# *args is useful when you want to create flexible functions:


# Ex:
# A function that calculates the sum of any number of values:
def my_function(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total


print(my_function(1, 2, 3))
print(my_function(10, 20, 30, 40))
print(my_function(5))


# Ex:
# Finding the maximum value:
def my_function(*numbers):
    if len(numbers) == 0:
        return None
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num


print(my_function(3, 7, 2, 9, 1))


# Arbitrary "Keyword Arguments", **kwargs:

# If you do not know how many "keyword arguments" that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.

# This way the function will receive a "dictionary of arguments", and can access the items accordingly:


# Ex:
# Using **kwargs to accept any number of "keyword arguments":
def my_function(**kids):
    print(kids)  # {'first_name': 'John', 'last_name': 'Doe'}
    print(f"His last name is {kids["last_name"]}")


my_function(first_name="John", last_name="Doe")

# NOTE: Arbitrary "Keyword Arguments" are often shortened to "**kwargs" in Python documentations.

# What is **kwargs?

# The `**kwargs` parameter allows a function to accept any number of keyword arguments.

# Inside the function, `kwargs` becomes a dictionary containing all the keyword arguments:


# Ex:
# Accessing values from **kwargs:
def my_function(**my_var):
    print(f"Type: {type(my_var)}")
    print(f"Name {my_var["name"]}")
    print(f"Age {my_var["age"]}")
    print(f"All data: {my_var}")


my_function(name="John", age=30, city="NYC")

# Using **kwargs with Regular Arguments:

# You can combine regular parameters with **kwargs.

# Regular parameters must come before **kwargs:


# Ex:
def my_function(username, **details):
    print(f"Username: {username}")
    print("Additional details:")
    for key, value in details.items():
        print(f"{key}: {value}")


my_function("Emil", age=25, city="Oslo", hobby="coding")

# Combining *args and **kwargs:

# You can use both *args and **kwargs in the same function.

"""  
The order must be:
    1. regular parameters
    2. *args
    3. **kwargs
"""


# Ex:
def my_function(title, *args, **kwargs):
    print(f"Title: {title}")
    print(f"Positional arguments: {args}")
    print(f"Keyword arguments: {kwargs}")


my_function("User Info", "Emil", "Tobias", age=25, city="Oslo")

# Output:
# Title: User Info
# Positional arguments: ('Emil', 'Tobias')
# Keyword arguments: {'age': 25, 'city': 'Oslo'}

# Unpacking Arguments:

# The `*` and `**` operators can also be used when calling functions to unpack (expand) a list or dictionary into separate arguments.

# Unpacking Lists with *

# If you have values stored in a list, you can use `*` to unpack them into individual arguments:


# Ex:
# Using * to unpack a list into arguments:
def my_function(a, b, c):
    return a + b + c


numbers = [1, 2, 3]
result = my_function(*numbers)
# Same as: my_function(1, 2, 3) / Similar to JavaScript Spread Operator
print(result)  # 6


# Unpacking Dictionaries with **

# If you have keyword arguments stored in a dictionary, you can use `**` to unpack them:

# Ex:
# Using ** to unpack a dictionary into keyword arguments:


def my_function(first_name, last_name):
    print(f"Hello {first_name} {last_name}")


person = {"first_name": "John", "last_name": "Doe"}
my_function(**person)
# Same as: my_function(first_name="John", last_name="Doe")

# IMPORTANT:
# Remember: Use `*` and `**` in function definitions to collect arguments, and use them in function calls to unpack arguments.
