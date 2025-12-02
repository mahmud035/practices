# Python - Remove Dictionary Items:

# Removing Items:
# There are several methods to remove items from a dictionary:

# Ex:
# The `pop()` method removes the item with the specified key name:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

car.pop("model")

print(car)  # {'brand': 'Ford', 'year': 1964}


# Ex:
# The `popitem()` method removes the last inserted item:
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

car.popitem()

print(car)  # {'brand': 'Ford', 'model': 'Mustang'}


# Ex:
# The `clear()` method empties the dictionary::
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

car.clear()

print(car)  # {}
