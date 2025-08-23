# NOTE: Built-in Data Types:
# Python has the following data types built-in by default, in these categories:

"""
Text Type         : `str`
Numeric Types     : `int`, `float`, `complex`
Sequence Types    : `list`, `tuple`, `range`
Mapping Type      : `dict`
Set Types         : `set`, `frozenset`
Boolean Type      : `bool`
Binary Types      : `bytes`, `bytearray`, `memoryview`
None Type         : `NoneType`

"""

# Setting the Data Type:
# In Python, the data type is set when you assign a value to a variable:

# Ex:
x = "Hello World"  # Data Type: `str`
x = 20  # Data Type: `int`
x = 20.5  # Data Type: `float`
x = 1j  # Data Type: `complex`
x = ["apple", "banana", "cherry"]  # Data Type: `list`
x = ("apple", "banana", "cherry")  # Data Type: `tuple`
x = range(6)  # Data Type: `range`
x = {"name": "John", "age": 36}  # Data Type: `dict`
x = {"apple", "banana", "cherry"}  # Data Type: `set`
x = frozenset({"apple", "banana", "cherry"})  # Data Type: `frozenset`
x = True  # Data Type: `bool`
x = b"Hello"  # Data Type: `bytes`
x = bytearray(5)  # Data Type: `bytearray`
x = memoryview(bytes(5))  # Data Type: `memoryview`
x = None  # Data Type: `NoneType`

print(x)
print(type(x))
