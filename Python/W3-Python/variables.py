# Creating Variables:
# Variables are containers for storing data values.
# Python has no command for declaring a variable.
# A variable is created the moment you first assign a value to it.

# Ex:
number = 5
name = "John"
print(number, name)

# Variables do not need to be declared with any particular type, and can even change type after they have been set.

# Ex:
x = 4  # `x` is of type `int`
x = "Sally"  # `x` is now type `str`
print(x)

# Casting:
# If you want to specify the data type of a variable, this can be done with casting.

# Ex:
x = str(3)  # `x` will be '3
x = int(3)  # `x` will be 3
x = float(3)  # `x` will be 3.0

# Get the Type
# You can get the data type of a variable with the `type()` function.

# Ex:
num = 5
name = "John"
print(type(num))
print(type(name))
