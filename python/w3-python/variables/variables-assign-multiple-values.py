# Many Values to Multiple Variables:
# Python allows you to assign values to multiple variables in one line:

# Ex:
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

# WARNING: Make sure the number of variables matches the number of values, or else you will get an error.

# One Value to Multiple Variables:
# And you can assign the same value to multiple variables in one line:

# Ex:
x = y = z = "Orange"
print(x)
print(y)
print(z)

# Unpack a Collection:
# If you have a collection of values in a list, tuple etc. Python allows you to extract the values into variable. This is called `unpacking`.

# Ex:
# Unpack a list:
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print("x =>", x)
print("y =>", y)
print("z =>", z)
