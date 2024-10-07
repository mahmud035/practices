# Python Functions:

# A function is a block of code which only runs when it is called.

# You can pass data, known as parameters, into a function.

# A function can return data as a result.


# Creating a Function:
# In Python a function is defined using the `def` keyword:


# Ex:
from re import X
from unittest import result


def my_function():
    print("Hello from a function")


# Calling a Function:
# To call a function, use the function name followed by parenthesis:


# Ex:
def my_function():
    print("Hello from a function")


my_function()

# Arguments:
# Information can be passed into functions as arguments.
# Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.


# Ex:
def my_function(first_name):
    print(f"{first_name} Refsnes")


my_function("Emil")
my_function("Tobais")
my_function("Linus")

# NOTE: Arguments are often shortened to "args" in Python documentations.

# Parameters or Arguments?
# The terms "parameter" and "argument" can be used for the same thing: information that are passed into a function.

"""
From a function's perspective:
  A parameter is the variable listed inside the parentheses in the function definition.
  An argument is the value that is sent to the function when it is called.
"""

# Number of Arguments:
# By default, a function must be called with the correct number of arguments. Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.


# Ex:
# This function expects 2 arguments, and gets 2 arguments:
def my_function(first_name, last_name):
    print(f"{first_name} {last_name}")


my_function("Emil", "Refsnes")

# Arbitrary Arguments, *args:

# If you do not know how many arguments that will be passed into your function, add a `*` before the parameter name in the function definition.

# This way the function will receive a "tuple of arguments", and can access the items accordingly:


# Ex:
# If the number of arguments is unknown, add a `*` before the parameter name:
def my_function(*args):
    print(args)
    print(f"The youngest child is {args[2]}")


my_function("Emil", " Tobais", "Linus")

# NOTE: Arbitrary Arguments are often shortened to "*args" in Python documentations.

# Keyword Arguments:
# You can also send arguments with the key = value syntax.
# This way the order of the arguments does not matter.


# Ex:
def my_function(child3, child2, child1):
    print(f"The youngest child is {child3}")


my_function(child1="Emil", child2="Tobais", child3="Linus")

# NOTE: The phrase Keyword Arguments are often shortened to "kwargs" in Python documentations.


# Arbitrary Keyword Arguments, **kwargs:
# If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.

# This way the function will receive a "dictionary of arguments", and can access the items accordingly:

# Ex:
# If the number of keyword arguments is unknown, add a double ** before the parameter name:
def my_function(**kwargs):
    print(kwargs)
    print(f"His last name is {kwargs["last_name"]}")

my_function(first_name = 'Tobais', last_name = 'Refsnes')

# NOTE: Arbitrary Keyword Arguments are often shortened to "**kwargs" in Python documentations.

# Default Parameter Value:
# The following example shows how to use a default parameter value.
# If we call the function without argument, it uses the default value:

# Ex:
def my_function(country = 'Norway'):
    print(f"I am from {country}")

my_function('Bangladesh')
my_function()
my_function('Pakistan')

# Passing a List as an Argument:

# You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.

# E.g. if you send a List as an argument, it will still be a List when it reaches the function:

# Ex:
def my_function(fruits):
    for fruit in fruits:
        print(fruit)

fruits = ['apple', 'banana', 'cherry']

my_function(fruits)

# Return Values:
# To let a function return a value, use the `return` statement:

# Ex:
def my_function(num):
    return 5 * num

print(my_function(3))
print(my_function(5))
print(my_function(9))


# The pass Statement:
# `function` definitions cannot be empty, but if you for some reason have a `function` definition with no content, put in the `pass` statement to avoid getting an error.

# Ex:
def my_function():
  pass


# Positional-Only Arguments:

# You can specify that a function can have ONLY positional arguments, or ONLY keyword arguments.

# To specify that a function can have only positional arguments, add `, /` after the arguments:

# Ex:
def my_function(num, /):
    print(num)

my_function(3)

# Without the `, /` you are actually allowed to use keyword arguments even if the function expects positional arguments:

# Ex:
def my_function(num):
    print(num)

my_function(num=3)

# 🔴 Error: But when adding the `, /` you will get an error if you try to send a keyword argument:

# Ex:
def my_function(num, /):
    print(num)

# my_function(num=3)


# Keyword-Only Arguments:

# To specify that a function can have only keyword arguments, add `*,` before the arguments:

# Ex:
def my_function(*, num):
    print(num)

my_function(num=3)

# Without the `*,` you are allowed to use Positional arguments even if the function expects keyword arguments:

def my_function(num):
    print(num)

my_function(3)

# 🔴 Error: But when adding the `*,` you will get an error if you try to send a positional argument:

# Ex:
def my_function(*, num):
    print(num)

# my_function(3)


# Combine Positional-Only and Keyword-Only:

# You can combine the two argument types in the same function.

# Any argument before the `/ ,` are positional-only, and any argument after the `*,` are keyword-only.

# Ex:
def my_function(a, b, /, *, c, d):
    print(a + b + c + d)

my_function(5, 6, c = 7, d = 8)


# Recursion:

# Ex:
# Recursion Example:
def tri_recursion(k):
    if(k > 0):
        result = k + tri_recursion(k-1)
        print(result)
    else:
        result = 0
    return result

print("\n\nRecursion Example Results")
tri_recursion(6)
