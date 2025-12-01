# Python - Change Dictionary Items:

# Change Values:
# You can change the value of a specific item by referring to its key name:

# Ex:
# Change the "year" to 2018:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

car["year"] = 2018

print(car)

# Update Dictionary:
# The `update()` method will update the dictionary with the items from the given argument.
# The argument must be dictionary, or an iterable object with key:value pairs.

# Ex:
# Update the "year" of the car by using `update()` method:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

car.update({"year": 2020})

print(car)
