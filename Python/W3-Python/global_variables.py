# Global Variables:
# Variables that are created outside of a function are known as global variables.
# Global variables can be used by everyone, both inside of functions and outside.

# Ex:
# Create a variable outside of a function, and use it inside the function
x = "awesome"


def myFunc():
    print("Python is " + x)


myFunc()

# If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.

# Ex:
# Create a variable inside a function, with the same name as the global variable
x = "awesome"


def myFunc2():
    x = "fantastic"
    print("Python is " + x)


myFunc2()

print("Python is " + x)
