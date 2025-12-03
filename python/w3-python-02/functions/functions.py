# Python Functions:

# A function is a block of code which only runs when it is called.
# A function can return data as a result.
# A function helps avoiding code repetition.

# Creating a Function:

# In Python a function is defined using the `def` keyword, followed by a function name and parentheses:


# Ex:
def my_function():
    print("Hello from a function")


# This creates a function named `my_function` that prints "Hello from a function" when called.

# NOTE: The code inside the function must be indented. Python uses indentation to define code blocks.

# Calling a Function:
# To call a function, use the function name followed by parenthesis:


# Ex:
def my_function():
    print("Hello from a function")


my_function()

# You can call the same function multiple times:
my_function()
my_function()
my_function()


# Function Names:

"""  
Function names follow the same rules as variable names in Python:

    A function name must start with a letter or underscore
    A function name can only contain letters, numbers, and underscores
    Function names are case-sensitive (myFunction and my_function are different)
"""

# NOTE: It's good practice to use descriptive names that explain what the function does.

# Why Use Functions?

# Imagine you need to convert temperatures from Fahrenheit to Celsius several times in your program. Without functions, you would have to write the same calculation code repeatedly:

# Ex:
# Without functions - repetitive code:
temp1 = 77
celsius1 = (temp1 - 32) * 5 / 9
print(celsius1)

temp2 = 95
celsius2 = (temp2 - 32) * 5 / 9
print(celsius2)

temp3 = 50
celsius3 = (temp3 - 32) * 5 / 9
print(celsius3)

# With functions, you write the code once and reuse it:
# Ex:
# With functions - reusable code:


def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5 / 9


print(fahrenheit_to_celsius(77))
print(fahrenheit_to_celsius(95))
print(fahrenheit_to_celsius(50))

# Return Values:

# Functions can send data back to the code that called them using the return statement.

# When a function reaches a return statement, it stops executing and sends the result back:

# Ex:
# A function that returns a value:


def get_greeting():
    return "Hello from a function"


message = get_greeting()
print(message)

# You can use the returned value directly:

print(get_greeting())

# IMPORTANT: If a function doesn't have a `return` statement, it returns `None` by default.

# The pass Statement:

# Function definitions cannot be empty. If you need to create a function placeholder without any code, use the `pass` statement:


def my_function():
    pass


# The `pass` statement is often used when developing, allowing you to define the structure first and implement details later
