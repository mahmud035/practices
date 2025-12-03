# Python Else Statement

# The Else Keyword:

# The `else` keyword catches anything which isn't caught by the preceding conditions.

# The `else` statement is executed when the `if` condition (and any `elif` conditions) evaluate to `False`.

# Ex:
a = 200
b = 33
if b > a:
    print(f"{b} is greater than {a}")
elif a == b:
    print(f"{a} and {b} are equal")
else:
    print(f"{a} is greater than {b}")


# Else Without Elif:
# You can also have an `else` without the `elif`:

a = 200
b = 33
if b > a:
    print("b is greater than a")
else:
    print("b is not greater than a")

# How Else Works:

# The `else` statement provides a default action when none of the previous conditions are true. Think of it as a "catch-all" for any scenario not covered by your `if` and `elif` statements.

# NOTE: The `else` statement must come last. You cannot have an `elif` after an `else`.

# Ex:
# Checking even or odd numbers:
number = 7

if number % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")


# Complete If-Elif-Else Chain:
# You can combine `if`, `elif`, and `else` to create a comprehensive decision-making structure.

# Ex:
# Temperature classifier:
temperature = 22

if temperature > 30:
    print(f"It's hot outside!")
elif temperature > 20:
    print(f"It's warm outside")
elif temperature > 10:
    print(f"It's cool outside")
else:
    print(f"It's cold outside!")


# Else as Fallback:

# The `else` statement acts as a fallback that executes when none of the preceding conditions are true. This makes it useful for error handling, validation, and providing default values.

# Ex:
# Validating user input:
username = "Emil"

if len(username) > 0:
    print(f"Welcome, {username}!")
else:
    print("Error: Username cannot be empty")
