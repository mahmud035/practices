# Python Match
# Similar to JavaScript Switch Statement

# The `match` statement is used to perform different actions based on different conditions.

# The Python Match Statement:

# Instead of writing many `if..else` statements, you can use the `match` statement.

# The `match` statement selects one of many code blocks to be executed.

"""
This is how it works:
  The `match` expression is evaluated once.
  The value of the expression is compared with the values of each `case`.
  If there is a match, the associated block of code is executed.
"""

# Ex:
day = 4

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case 7:
        print("Sunday")


# Default Value:

# Use the underscore character `_` as the last case value if you want a code block to execute when there are not other matches:

# Ex:
day = 4

match day:
    case 6:
        print("Today is Saturday")
    case 7:
        print("Today is Sunday")
    case _:
        print("Looking forward to the Weekend")


# Combine Values:

# Use the pipe character `|` as an or operator in the case evaluation to check for more than one value match in one case:

# Ex:
day = 4

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Today is a weekday")
    case 6 | 7:
        print("I love weekends!")
