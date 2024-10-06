# Python For Loops:

# Python For Loops:

# A `for` loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

# Ex:
# Print each fruit in a fruit list:
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# Looping Through a String:
# Even strings are iterable objects, they contain a sequence of characters:

# Ex:
# Loop through the letters in the word "banana":
for letter in "banana":
    print(letter)

# The break Statement:
# With the `break` statement we can stop the loop before it has looped through all the items:

# Ex:
# Exit the loop when `fruit` is "banana":
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
    if fruit == "banana":
        break

# Ex:
# Exit the loop when `fruit` is "banana", but this time the break comes before the print:
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    if fruit == "banana":
        break
    print(fruit)

# The continue Statement:
# With the `continue` statement we can stop the current iteration of the loop, and continue with the next:

# Ex:
# Do not print "banana":
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    if fruit == "banana":
        continue
    print(fruit)


# NOTE: The `range()` Function:

# To loop through a set of code a specified number of times, we can use the `range()` function,

# The `range()` function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.

# Ex:
# Using the range() function:
for num in range(6):
    print(num)

# IMPORTANT: Note that `range(6)` is not the values of 0 to 6, but the values 0 to 5.


# NOTE: The `range()` function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: `range(2, 6)`, which means values from 2 to 6 (but not including 6):

# Ex:
# Using the start parameter:
for num in range(2, 6):
    print(num)


# NOTE: The `range()` function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: `range(2, 30, 3)`:

# Ex:
# Increment the sequence with 3 (default is 1):
for num in range(2, 30, 3):
    print(num)


# Else in For Loop:
# The `else` keyword in a for loop specifies a block of code to be executed when the loop is finished:

# Ex:
# Print all numbers from 0 to 5, and print a message when the loop has ended:
for num in range(6):
    print(num)
else:
    print("Finally finished!")

# NOTE: The `else` block will NOT be executed if the loop is stopped by a break statement.

# Ex:
# Break the loop when `num` is 3, and see what happens with the `else` block:
for num in range(6):
    if num == 3:
        break
    print(num)
else:
    print("Finally finished!")


# Nested Loops:

# A nested loop is a loop inside a loop.

# The "inner loop" will be executed one time for each iteration of the "outer loop":

# Ex:
# Print each adjective for every fruit:
adjectives = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for adj in adjectives:
    for fruit in fruits:
        print(adj, fruit)


# The pass Statement:
# `for` loops cannot be empty, but if you for some reason have a `for` loop with no content, put in the `pass` statement to avoid getting an error.

# Ex:
for x in [0, 1, 2]:
    pass
