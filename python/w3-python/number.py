# Python Numbers:
# There are three numeric types in Python:
# `int`, `float`, `complex`

# Ex:
x = 1  # `int`
y = 2.8  # `float`
z = 1j  # `complex`


# Type Conversion:
# You can convert from one type to another with the `int()`, `float()`, and `complex()` methods:

# Ex:
# Convert from one type to another:
x = 1  # `int`
y = 2.8  # `float`
z = 1j  # `complex`

# Convert from `int` to `float`:
int_to_float = float(x)

# Convert from `float` to `int`:
float_to_int = int(2.8)

# Convert from `int` to `complex`:
int_to_complex = complex(x)

print(int_to_float)
print(float_to_int)
print(int_to_complex)

print(type(int_to_float))
print(type(float_to_int))
print(type(int_to_complex))

# WARNING: You can not convert complex numbers into another number type.


# Random Number
# Python does not have a `random()` function to make random number, but Python has a built-in module called `random` that can be used to make random numbers.

# Ex:
# Import the `random` module, and display a random number between 1 and 9:
import random

print(random.randrange(1, 10))
