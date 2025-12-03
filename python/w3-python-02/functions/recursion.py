# Python Recursion

# Recursion:

# Recursion is when a function calls itself.

# Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.

# The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.


# Ex:
# A simple recursive function that counts down from 5:


def countdown(n):
    if n <= 0:
        print("Done!")
    else:
        print(n)
        countdown(n - 1)


countdown(5)

# Base Case and Recursive Case:

"""  
# Every recursive function must have two parts:

    A "base case" - A condition that stops the recursion
    A "recursive case" - The function calling itself with a modified argument
"""

# Without a base case, the function would call itself forever, causing a stack overflow error.

# Ex:
# Identifying base case and recursive case:


def factorial(n):
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive case
    else:
        return n * factorial(n - 1)


print(factorial(5))  # 120

# WARNING: The base case is crucial. Always make sure your recursive function has a condition that will eventually be met.

# Fibonacci Sequence:

# The Fibonacci sequence is a classic example where each number is the sum of the two preceding ones. The sequence starts with 0 and 1:

# 0, 1, 1, 2, 3, 5, 8, 13, ...

# The sequence continues indefinitely, with each number being the sum of the two preceding ones.

# We can use recursion to find a specific number in the sequence:

# Ex:
# Find the 7th number in the Fibonacci sequence:


def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci((7)))  # 13

# Recursion with Lists

# Recursion can be used to process lists by handling one element at a time:

# Ex:
# Calculate the sum of all elements in a list:


def sum_list(numbers):
    if len(numbers) == 0:
        return 0
    else:
        return numbers[0] + sum_list(numbers[1:])


my_list = [1, 2, 3, 4, 5]
print(sum_list(my_list))  # 15

# Ex:
# Find the maximum value in a list:


def find_max(numbers):
    if len(numbers) == 1:
        return numbers[0]
    else:
        max_of_rest = find_max(numbers[1:])
        return numbers[0] if numbers[0] > max_of_rest else max_of_rest


my_list = [3, 7, 2, 9, 1]
print(find_max(my_list))  # 9
