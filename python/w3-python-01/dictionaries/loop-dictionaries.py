# Python - Loop Dictionaries:

# Loop Through a Dictionary:

# You can loop through a dictionary by using a `for` loop.

# When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well.

# Ex:
# Print all key names in the dictionary, one by one:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

for key in car:
    print(key)

# Ex:
# Print all values in the dictionary, one by one:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

for key in car:
    print(car[key])

# Ex:
# You can also use the `values()` method to return values of a dictionary:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

for value in car.values():
    print(value)

# Ex:
# You can use the `keys()` method to return the keys of a dictionary:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

for key in car.keys():
    print(key)

# Ex:
# Loop through both keys and values, by using the `items()` method:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

for key, value in car.items():
    print(key, value)
