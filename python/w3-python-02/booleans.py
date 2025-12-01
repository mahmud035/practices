# Python Booleans:
# Booleans represent one of two values: `True` or `False`.
# When you compare two values, the expression is evaluated and Python returns the Boolean answer:

# Ex:
print(10 > 9)
print(10 == 9)
print(10 < 9)

# When you run a condition in an if statement, Python returns `True` or `False`:

# Ex:
# Print a message based on weather the condition is `True` or `False`:
num1 = 200
num2 = 33

if num2 > num1:
    print(f"{num2} is greater than {num1}")
else:
    print(f"{num1} is greater that {num2}")

# Evaluate Values and Variables:
# The `bool()` function allows you to evaluate any value, and give you `True` or `False` in return.

# Ex:
# Evaluate a string and a number:
print(bool(""))
print(bool(0))

print(bool("Hello"))
print(bool(15))

# Ex:
# Evaluate two variables:
x = "Hello"
y = 15

print(bool(x))
print(bool(y))


# IMPORTANT: Most Values are True:
"""
✅ Almost any value is evaluated to `True` if it has some sort of content.

✅ Any string is `True`, except empty string.

✅ Any number is `True`, except `0`.

✅ Any list, tuple, set, and dictionary are `True`, except empty ones.
"""

# Ex:
# The following will return True:
print(bool("abc"))
print(bool(123))
print(bool(["apple", "banana", "cherry"]))

# NOTE: Some Values are False:
# In fact, there are not many values that evaluate to `False`, except empty values, such as `()`,`{}`,`[]`,"", the number `0`, and the value `None`. And of course the value `False` evaluate to `False`.

# Ex:
# The following will return False:
print(bool(False))
print(bool(""))
print(bool(0))
print(bool(()))
print(bool({}))
print(bool([]))
print(bool(None))


# One more value, or object in this case, evaluates to `False`, and that is if you have an object that is made from a class with a `__len__` function that returns `0` or `False`:


# Ex:
class myClass:
    def __len__(self):
        return 0


myObj = myClass()
print(bool(myObj))

# Functions can Return a Boolean:
# You can create functions that returns a Boolean Value:


# Ex:
def myFunction():
    return True


print(myFunction())

# You can execute code based on the Boolean answer of a function:

# Ex:
# Print "YES!" if the function returns True, otherwise print "NO!":
if myFunction():
    print("YES!")
else:
    print("NO!")
