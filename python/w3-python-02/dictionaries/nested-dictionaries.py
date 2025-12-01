# Python - Nested Dictionaries:

# Nested Dictionaries:
# A dictionary can contain dictionaries, this is called nested dictionaries.

# Ex:
# Create a dictionary that contain three dictionaries:
myFamily = {
    "child1": {"name": "Emil", "year": 2004},
    "child2": {"name": "Tobias", "year": 2007},
    "child3": {"name": "Linus", "year": 2011},
}
print(myFamily)

# Or, if you want to add three dictionaries into a new dictionary:

# Ex:
# Create three dictionaries, then create one dictionary that will contain the other three dictionaries:
child1 = {"name": "Emil", "year": 2004}
child2 = {"name": "Tobias", "year": 2007}
child3 = {"name": "Linus", "year": 2011}

myFamily = {"child1": child1, "child2": child2, "child3": child3}
print(myFamily)

# Access Items in Nested Dictionaries:
# To access items from a nested dictionary, you use the name of the dictionaries, starting with the outer dictionary:

# Ex:
# Print the name of child 2:
myFamily = {
    "child1": {"name": "Emil", "year": 2004},
    "child2": {"name": "Tobias", "year": 2007},
    "child3": {"name": "Linus", "year": 2011},
}
print(myFamily["child2"]["name"])

# Loop Through Nested Dictionaries:
# You can loop through a dictionary by using the `items()` method like this:

# Ex:
# Loop through the keys and values of all nested dictionaries:
print("=====================")
myFamily = {
    "child1": {"name": "Emil", "year": 2004},
    "child2": {"name": "Tobias", "year": 2007},
    "child3": {"name": "Linus", "year": 2011},
}


for x, obj in myFamily.items():
    print(x)

    for key in obj:
        print(f"{key}: {obj[key]}")


print("=====================")

# Another way to do this:

for x, obj in myFamily.items():
    print(x)

    for key, value in obj.items():
        print(f"{key}: {value}")


print("=====================")


# Exercise:
person1 = {"name": "John", "age": 20}
person2 = {"name": "May", "age": 23}

customers = {"c1": person1, "c2": person2}

for x, obj in customers.items():
    print(x)

    for key in obj:
        print(f"{key}: {obj[key]}")
