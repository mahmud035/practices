# Python Lambda:

# A lambda function is a small anonymous function.

# A lambda function can take any number of arguments, but can only have one expression.

# Syntax:
# lambda arguments : expression

# The expression is executed and the result is returned:

# Ex:
# Add 10 to argument `a`, and return the result:
from functions import my_function


x = lambda a: a + 10
print(x(5))

# Lambda functions can take any number of arguments:

# Ex:
# Multiply argument `a` with argument `b` and return the result:
x = lambda a, b: a * b
print(x(5, 6))

# Ex:
# Summarize argument `a`, `b`, and `c` and result the result:
x = lambda a, b, c: a + b + c
print(x(5, 6, 2))


# IMPORTANT: Why Use Lambda Functions?

# ✅ TODO: Use lambda functions when an anonymous function is required for a short period of time. 👇

# The power of lambda is better shown when you use them as an anonymous function inside another function.

# Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:


# Ex:
def my_function(n):
    return lambda a: a * n


# Use that function definition to make a function that always doubles the number you send in:


# Ex:
def my_function(n):
    return lambda a: a * n


my_doubler = my_function(2)

print(my_doubler(11))


# Or, use the same function definition to make a function that always triples the number you send in:


# Ex:
def my_function(n):
    return lambda a: a * n


my_tripler = my_function(3)

print(my_tripler(11))


# Or, use the same function definition to make both functions, in the same program:


# Ex:
def my_function(n):
    return lambda a: a * n


my_doubler = my_function(2)
my_tripler = my_function(3)

print(my_doubler(11))
print(my_tripler(11))
