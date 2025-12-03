# Python Function Arguments

# Arguments:

# Information can be passed into functions as arguments.

# Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.

# The following example has a function with one argument (first_name). When the function is called, we pass along a first name, which is used inside the function to print the full name:


# Ex:
# A function with one argument:
def my_function(first_name):
    print(f"Hello {first_name}")


my_function("Emil")
my_function("Tobias")
my_function("Linus")


# Parameters or Arguments:

# The terms "parameter" and "argument" can be used for the same thing: information that are passed into a function.

"""
From a function's perspective:
  A parameter is the variable listed inside the parentheses in the function definition.

  An argument is the actual value that is sent to the function when it is called.
"""


# Ex:
def my_function(name):  # `name` is parameter
    print(f"Hello {name}")


my_function("Emil")  # `Emil` is an argument

# Number of Arguments:

# By default, a function must be called with the correct number of arguments. Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.


# Ex:
# This function expects 2 arguments, and gets 2 arguments:
def my_function(first_name, last_name):
    print(f"Hello, {first_name} {last_name}")


my_function("John", "Doe")

# Default Parameter Values:

# You can assign default values to parameters. If the function is called without an argument, it uses the default value:


# Ex:
def my_function(name="friend"):
    print(f"Hello {name}")


my_function("Emil")
my_function("Tobias")
my_function()  # Will use default value of `name`
my_function("Linus")


# Ex:
# Default value for country parameter:
def my_function(country="Norway"):
    print(f"I am from {country}")


my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")

# Keyword Arguments:

# You can send arguments with the "key = value" syntax.


# Ex:
def my_function(animal, name):
    print(f"I have a {animal}")
    print(f"My ${animal}'s name is {name}")


my_function(animal="dog", name="Buddy")

# This way, with keyword arguments, the order of the arguments does not matter.


# Ex:
def my_function(animal, name):
    print(f"I have a {animal}")
    print(f"My {animal}'s name is {name}")


my_function(name="Buddy", animal="dog")

# NOTE: The phrase "Keyword Arguments" is often shortened to "kwargs" in Python documentation.

# Positional Arguments:

# When you call a function with arguments without using keywords, they are called positional arguments.

# Positional arguments must be in the correct order:


# Ex:
def my_function(animal, name):
    print(f"I have a {animal}")
    print(f"My {animal}'s name is {name}")


my_function("dog", "Buddy")

# The order matters with positional arguments:
# Ex:
# Switching the order changes the result:


def my_function(animal, name):
    print("I have a", animal)
    print("My", animal + "'s name is", name)


my_function("Buddy", "dog")

# Mixing Positional and Keyword Arguments:

# You can mix positional and keyword arguments in a function call.

# However, positional arguments must come before keyword arguments:


# Ex:
def my_function(animal, name, age):
    print(f"I have a {age} years old {animal} named {name}")


my_function("dog", name="Buddy", age=5)

# Passing Different Data Types:

# You can send any data type as an argument to a function (string, number, list, dictionary, etc.).

# The data type will be preserved inside the function:


# Ex:
# Sending a list as an argument:
def my_function(fruits):
    for fruit in fruits:
        print(fruit)


my_fruits = ["apple", "banana", "cherry"]
my_function(my_fruits)


# Ex:
# Sending a dictionary as an argument:
def my_function(person):
    print("Name:", person["name"])
    print("Age:", person["age"])


my_person = {"name": "Emil", "age": 25}
my_function(my_person)

# Returning Different Data Types:

# Functions can return any data type, including lists, tuples, dictionaries, and more.


# Ex:
# A function that returns a list:
def my_function():
    return ["apple", "banana", "cherry"]


fruits = my_function()
print(fruits[0])
print(fruits[1])
print(fruits[2])


# Ex:
# A function that returns a tuple:
def my_function():
    return (10, 20)


x, y = my_function()  # unpacking/destructuring
print("x:", x)
print("y:", y)
