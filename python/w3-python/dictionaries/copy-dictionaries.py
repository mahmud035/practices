# Python - Copy Dictionaries:

# Copy a Dictionary:
# There are ways to make a copy, one way is to use the built-in Dictionary method `copy()`.

# Ex:
# Make a copy of a dictionary with the `copy()` method:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

carCopy = car.copy()  # Copy the car dictionary

print(carCopy)

# Another way to make a copy is to use the built-in function `dict()`.

# Ex:
# Make a copy of a dictionary with the `dict()` function:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

carCopy = dict(car)  # Copy the car dictionary

print(carCopy)
