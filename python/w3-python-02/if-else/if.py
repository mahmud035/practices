# Python If ... Else:

# Python Conditions and If statements:

# Python supports the usual logical conditions from mathematics:

"""
Equals: `a == b`
Not Equals: `a != b`
Less than: `a < b`
Less than or equal to: `a <= b`
Greater than: `a > b`
Greater than or equal to: `a >= b`
"""

# These conditions can be used in several ways, most commonly in "if statements" and loops.

# Ex:
# If statement:
a = 33
b = 200
if b > a:
    print(f"{b} is grater that {a}")

# How If Statements Work:

# The if statement evaluates a condition (an expression that results in `True` or `False`). If the condition is true, the code block inside the if statement is executed. If the condition is false, the code block is skipped.

# Ex:
# Checking if a number is positive:
number = 15
if number > 0:
    print("The number is positive")

# Multiple Statements in If Block:

# You can have multiple statements inside an if block. All statements must be indented at the same level.

# Ex:
# Multiple statements in an if block:
age = 20
if age >= 18:
    print("You are an adult")
    print("You can vote")
    print("You have full legal rights")

# Using Variables in Conditions:

# Boolean variables can be used directly in if statements without comparison operators.

# Ex:
# Using a boolean variable:
isLoggedIn = True
if isLoggedIn:
    print("Welcome back!")


# NOTE:
""" 
Python can evaluate many types of values as `True` or `False` in an if statement.

Zero (`0`), empty strings (""), `None`, and empty collections are treated as `False`. Everything else is treated as `True`.

This includes positive numbers (`5`), negative numbers (`-3`), and any non-empty string (even "False" is treated as True because it's a non-empty string).
"""
