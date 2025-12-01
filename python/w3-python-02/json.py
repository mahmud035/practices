# Python JSON:

# JSON is a syntax for storing and exchanging data.

# JSON is text, written with JavaScript object notation.

# JSON in Python:

# Python has a built-in package called `json`, which can be used to work with JSON data.

# Parse JSON - Convert from JSON to Python:

# If you have a JSON string, you can parse it by using the `json.loads()` method.

# NOTE: The result will be a "Python dictionary".

# Ex:
# Convert from JSON to Python:
import json

# some JSON:
user = '{ "name":"John", "age":30, "city":"New York"}'

# parse user:
userDict = json.loads(user)

# the result is a "Python Dictionary":
print(userDict["name"])  # John
print(userDict["age"])  # 30
print(userDict["city"])  # New York


# Convert from Python to JSON:

# If you have a Python object, you can convert it into a JSON string by using the `json.dumps()` method.

# Ex:
# Convert from Python to JSON:
import json

# a Python object (dict):
user = {"name": "John", "age": 30, "city": "New York"}

# convert into JSON:
userStr = json.dumps(user)

# the result is a JSON string:
print(userStr)


# You can convert Python objects of the following types, into JSON strings:

"""
  dict
  list
  tuple
  string
  int
  float
  True
  False
  None
"""

# Ex:
# Convert Python objects into JSON strings, and print the values:
import json

print(json.dumps({"name": "John", "age": 30}))
print(json.dumps(["apple", "banana"]))
print(json.dumps(("apple", "banana")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))


# Ex:
# Convert a Python object containing all the legal data types:
import json

user = {
    "name": "John",
    "age": 30,
    "married": True,
    "divorced": False,
    "children": ("Ann", "Billy"),
    "pets": None,
    "cars": [{"model": "BMW 230", "mpg": 27.5}, {"model": "Ford Edge", "mpg": 24.1}],
}

print(json.dumps(user))

# Format the Result:

# The example above prints a JSON string, but it is not very easy to read, with no indentations and line breaks.

# The `json.dumps()` method has parameters to make it easier to read the result:

# Ex:
# Use the `indent` parameter to define the numbers of indents:
print(json.dumps(user, indent=2))
