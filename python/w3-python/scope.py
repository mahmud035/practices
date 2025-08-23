# Python Scope:

# NOTE: A variable is only available from inside the region it is created. This is called scope.

# Local Scope:

# A variable created inside a function belongs to the local scope of that function, and can only be used inside that function.


# Ex:
# A variable created inside a function is available inside that function:
def my_func():
    num = 300
    print(num)


my_func()


# Function Inside Function:

# As explained in the example above, the variable `num` is not available outside the function, but it is available for any function inside the function:


# Ex:
# The local variable can be accessed from a function within the function:
def my_func():
    num = 300

    def my_inner_func():
        print(num)

    my_inner_func()


my_func()


# Global Scope:

# A variable created in the main body of the Python code is a global variable and belongs to the global scope.

# Global variables are available from within any scope, global and local.

# Ex:
# A variable created outside of a function is global and can be used by anyone:
num = 300


def my_func():
    print(num)


my_func()

print(num)

# Naming Variables:

# If you operate with the same variable name inside and outside of a function, Python will treat them as two separate variables, one available in the global scope (outside the function) and one available in the local scope (inside the function):

# Ex:
# The function will print the local `num`, and then the code will print the global `num`:
num = 300


def my_func():
    num = 200
    print(num)


my_func()

print(num)
