# Python Nested If

# Nested If Statements:

# You can have `if` statements inside `if` statements. This is called nested `if` statements.

# Ex:
x = 41

if x > 10:
    print("Above ten,")
    if x > 20:
        print("and also above 20!")
    else:
        print("but not above 20.")


# How Nested If Works:

# Each level of nesting creates a deeper level of decision-making. The code evaluates from the outermost condition inward.

# Ex:
# Checking multiple conditions with nesting:

age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You are too young to drive")


# Multiple Levels of Nesting:

# You can nest as many levels deep as needed, but keep in mind that too many levels can make code harder to read.

score = 85
attendance = 90
submitted = True

if score >= 60:
    if attendance >= 80:
        if submitted:
            print("Pass with good standing")
        else:
            print("Pass but missing assignment")
    else:
        print("Pass but low attendance")
else:
    print("Fail")

# Nested If vs Logical Operators:

# Sometimes nested if statements can be simplified using logical operators like and. The choice depends on your logic.

# Ex:
# This nested if:
temperature = 25
is_sunny = True

if temperature > 20:
    if is_sunny:
        print("Perfect beach weather!")

# Ex:
# Could also be written with `and`:
temperature = 25
is_sunny = True

if temperature > 20 and is_sunny:
    print("Perfect beach weather!")

# IMPORTANT: Both approaches produce the same result. Use nested if statements when the inner logic is complex or depends on the outer condition. Use `and` when both conditions are simple and equally important.


# More Examples:

# Ex:
# Login validation with nested checks:
username = "Emil"
password = "python123"
is_active = True

if username:
    if password:
        if is_active:
            print("Login successful")
        else:
            print("Account is not active")
    else:
        print("Password required")
else:
    print("Username required")


# Ex:
# Grade calculation with nested logic:
score = 92
extra_credit = 5

if score >= 90:
    if extra_credit > 0:
        print("A+ grade")
    else:
        print("A grade")
elif score >= 80:
    print("B grade")
else:
    print("C grade or below")
