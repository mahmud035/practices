# Use a Module:

# Now we can use the module we just created, by using the `import` statement:

# Ex:
# Import the module named my_module, and call the greeting function:
import my_module

my_module.greeting("Jonathan")

# WARNING: When using a function from a module, use the syntax: module_name.function_name.

age = my_module.person1["age"]
print(age)

# Built-in Modules:

# There are several built-in modules in Python, which you can import whenever you like.

# Ex:
# Import and use the `platform` module:
import platform

x = platform.system()
print(x)

# Using the dir() Function:

# There is a built-in function to list all the function names (or variable names) in a module. The `dir()` function:

# Ex:
# List all the defined names belonging to the platform module:
import platform

x = dir(platform)
# print(x)

# NOTE: The `dir()` function can be used on all modules, also the ones you create yourself.


# IMPORTANT: Import From Module

# You can choose to import only parts from a module, by using the `from` keyword.

# Ex:
# The module named my_module has one function and one dictionary:
# Import only the person1 dictionary from the module:
from my_module import person1

print(person1["age"])

# TODO: When importing using the `from` keyword, do not use the module name when referring to elements in the module. Example: person1["age"], NOT mymodule.person1["age"]
