# Python Operators:
# Operators are used to perform operations on variables and values.

# Python divides the operators in the following groups:

"""
  Arithmetic operators
  Assignment operators
  Comparison operators
  Logical operators
  Identity operators
  Membership operators
  Bitwise operators
"""

# Python Arithmetic Operators:
# Arithmetic operators are used with numeric values to perform common mathematical operations:

# Ex:
x = 5
y = 3
print(x + y)  # Addition
print(x - y)  # Subtraction
print(x * y)  # Multiplication
print(x / y)  # Division
print(x % y)  # Modulus
print(x**y)  # Exponentiation
print(x // y)  # Floor division

# Python Assignment Operators:
# Assignment operators are used to assign values to variables:

# Ex:
x = 5  # Same As: x = 5
x += 5  # Same As: x = x + 5
x -= 3  # Same As: x = x - 3
x *= 3  # Same As: x = x * 3
x /= 3  # Same As: x = x / 3
x %= 3  # Same As: x = x % 3
x **= 3  # Same As: x = x ** 3

# Python Comparison Operators:
# Comparison operators are used to compare two values:

# Ex:
x = 5
y = 3
print(x == y)  # returns False because 5 is not equal to 3
print(x != y)  # returns True because 5 is not equal to 3
print(x > y)  # returns True because 5 is greater than 3
print(x < y)  # returns False because 5 is not less than 3
print(x >= y)  # returns True because 5 is greater, or equal, to 3
print(x <= y)  # returns False because 5 is neither less than or equal to 3


# Python Logical Operators:
# Logical operators are used to combine conditional statements:

"""
  `and` => Returns True if both statements are true
  `or` => Returns True if one of the statements is true
  `not` => Reverse the result
"""

# Ex:
x = 5

print(x > 3 and x < 10)

# returns True because 5 is greater than 3 AND 5 is less than 10

print(x > 3 or x < 4)

# returns True because one of the conditions are true (5 is greater than 3, but 5 is not less than 4)

print(not (x > 3 and x < 10))

# returns False because not is used to reverse the result


# Python Identity Operators:
# Identity operators are used to compare the objects, not if they are equal, but "if they are actually the same object, with the same memory location".

"""
  `is` => Returns True if both variables are the same object
  `is not` => Returns True if both variables are not the same object
"""

# Ex:
x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z)

# returns True because z is the same object as x (i.e. their Memory Location is Same)

print(x is y)

# returns False because x is not the same object as y, even if they have the same content (i.e. but their Memory Location is NOT Same)

print(x == y)

# to demonstrate the difference between "is" and "==": this comparison returns True because x is equal to y


x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is not z)

# returns False because z is the same object as x (i.e. their Memory Location is Same)

print(x is not y)

# returns True because x is not the same object as y, even if they have the same content (i.e. but their Memory Location is NOT Same)

print(x != y)

# to demonstrate the difference between "is not" and "!=": this comparison returns False because x is equal to y


# Python Membership Operators:
# Membership operators are used to test if a sequence is presented in an object:

"""
  `in` => Returns True if a sequence with the specified value is present in the object
  `not in` => Returns True if a sequence with the specified value is not present in the object
"""

# Ex:
fruits = ["apple", "banana"]

print("banana" in fruits)

# returns True because a sequence with the value "banana" is in the list

print("pineapple" not in fruits)

# returns True because a sequence with the value "pineapple" is NOT in the list


# Operator Precedence:
# Operator precedence describe the order in which operations are performed.

# Ex:
# Parentheses has the highest precedence, meaning that expressions inside parentheses must be evaluated first:
print((6 + 3) - (6 + 3))

# Ex:
# Multiplication `*` has higher precedence that addition `+`, and therefore multiplications are evaluated before additions:
print(100 + 5 * 3)  # Output: 115

# NOTE: If two operators have the same precedence, the expression is evaluated from "left to right".

# Ex:
# Addition `+` and subtraction `-` has the same precedence, and therefore we evaluate the expression from "left to right"
print(5 + 4 - 7 + 3)  # Output: 5
