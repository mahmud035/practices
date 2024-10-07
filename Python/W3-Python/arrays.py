# Python Arrays:

# IMPORTANT: Python does not have built-in support for Arrays, but Python "Lists" can be used instead.

# Arrays:

# WARNING: This page shows you how to use "LISTS" as ARRAYS, however, to work with arrays in Python you will have to import a library, like the NumPy library.

# Arrays are used to store multiple values in one single variable:

# Ex:
# Create an array containing car names:
cars = ["Ford", "Volvo", "BMW"]

# Access the Elements of an Array:
# You refer to an array element by referring to the index number.

# Ex:
# Get the value of the first array item:
car1 = cars[0]

# Ex:
# Modify the value of the first array item:
cars[0] = "Toyota"

# The Length of an Array:
# Use the `len()` method to return the length of an array (the number of elements in an array).

# Ex:
# Return the number of elements in the `cars` array:
num_of_elements = len(cars)
print(num_of_elements)

# NOTE: The length of an array is always one more than the highest array index.

# Looping Array Elements:
# You can use the `for in` loop to loop through all the elements of an array.

# Ex:
# Print each item in the cars array:
for car in cars:
    print(car)

# Adding Array Elements:
# You can use the `append()` method to add an element to an array.

# Ex:
# Add one more element to the `cars` array:
cars.append("Honda")
print(cars)

# Removing Array Elements:
# You can use the `pop()` method to remove an element from the array.

# Ex:
# Delete the second element of the `cars` array:
cars.pop(1)
print(cars)

# You can also use the `remove()` method to remove an element from the array.

# Ex:
# Delete the element that has the value "Honda":
cars.remove("Honda")
print(cars)

# NOTE: The list's `remove()` method only removes the first occurrence of the specified value.


# Array Methods:

# Python has a set of built-in methods that you can use on "lists/arrays".

# `append()`  => Adds an element at the end of the list
# `clear()`   => Removes all the elements from the list
# `copy()`    => Returns a copy of the list
# `count()`   => Returns the number of elements with the specified value
# `extend()`  => Add the elements of a list (or any iterable), to the end of the current list
# `index()`   => Returns the index of the first element with the specified value
# `insert()`  => Adds an element at the specified position
# `pop()`     => Removes the element at the specified position
# `remove()`  => Removes the first item with the specified value
# `reverse()` => Reverses the order of the list
# `sort()`    => Sorts the list


# IMPORTANT: Python does not have built-in support for Arrays, but Python "Lists" can be used instead.
