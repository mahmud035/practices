# Python - Access Dictionary Items:

# Accessing Items:
# You can access the items of dictionary by referring to its key name, inside square brackets:

# Ex:
# Get the value of the "model" key:
myDictionary = {"brand": "Ford", "model": "Mustang", "year": 1964}

model = myDictionary["model"]
print(model)

# There is also a method called `get()` that will give you the same result:

# Ex:
model = myDictionary.get("model")
print(model)

# Get Keys:
# The `keys()` method will return a list of all the keys in the dictionary.

# Ex:
# Get a "list" of the keys:
keys = myDictionary.keys()
print(keys)

# The list of the keys is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list.

# Ex:
# Add a new item to the original dictionary, and see that the keys list gets updated as well:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

keys = car.keys()

print(keys)  # before the change

car["color"] = "white"

print(keys)  # after the change

# Get Values:
# The `values()` method will return a list of all the values in the dictionary.

# Ex:
# Get a list of the values:
values = car.values()
print(values)

# The list of the values is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the values list.

# Ex:
# Make a change in the original dictionary, and see that the values list gets updated as well:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

values = car.values()

print(values)  # before the change

car["year"] = 2020

print(values)

# Ex:
# Add a new item to the original dictionary, and see that the values list gets updated as well:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

values = car.values()

print(values)  # before the change

car["color"] = "red"

print(values)

# Get Items:
# The `items()` method will return each item in a dictionary, as tuples in a list.

# Ex:
# Get a list of the key:value pairs
entries = car.items()
print(entries)

# The returned list is a view of the items of the dictionary, meaning that any changes done to the dictionary will be reflected in the items list.
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

entries = car.items()

print(entries)  # before the change

car["year"] = 2020

print(entries)

# Ex:
# Add a new item to the original dictionary, and see that the items list gets updated as well:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

entries = car.items()

print(entries)  # before the change

car["color"] = "red"

print(entries)

# Check if Key Exists:
# To determine if a specified key is present in a dictionary use the `in` keyword:

# Ex:
# Check if "model" is present in the dictionary:
carDict = {"brand": "Ford", "model": "Mustang", "year": 1964}

if "model" in carDict:
    print(f"Yes, 'model' is one of the keys in the carDic dictionary")
