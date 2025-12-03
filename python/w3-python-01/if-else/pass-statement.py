# Python Pass Statement

# The `pass` Statement:

# `if` statements cannot be empty, but if you for some reason have an `if` statement with no content, put in the `pass` statement to avoid getting an error.

# Ex:
a = 33
b = 200

if b > a:
    pass

# The `pass` statement is a null operation - nothing happens when it executes. It serves as a placeholder.

# Why Use pass?

"""  
The pass statement is useful in several situations:

  When you're creating code structure but haven't implemented the logic yet
  When a statement is required syntactically but no action is needed
  As a placeholder for future code during development
  In empty functions or classes that you plan to implement later
"""

# pass in Development:

# During development, you might want to sketch out your program structure before implementing the details. The `pass` statement allows you to do this without syntax errors.

# Ex:
# Placeholder for future development:
age = 16

if age < 18:
    pass  # TODO: Add underage logic later
else:
    print("Access granted")

# `pass` in Other Contexts:

# While we focus on `pass` with if statements here, it's also commonly used with loops, functions, and classes.


# Ex:
# Using pass with functions:
def calculate_discount(price):
    pass  # TODO: Implement discount logic


# Function exists but doesn't do anything yet
