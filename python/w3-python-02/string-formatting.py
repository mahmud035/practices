# Python String Formatting:

# NOTE: F-String was introduced in Python 3.6, and is now the preferred way of formatting strings.

# F-Strings:

# F-string allows you to format selected parts of a string.

# To specify a string as an f-string, simply put an `f` in front of the string literal, like this:

# Ex:
# Create an f-string:
text = f"The price is 49 dollars"
print(text)

# Placeholders and Modifiers:

# To format values in an f-string, add placeholders `{}`, a placeholder can contain variables, operations, functions, and modifiers to format the value.

# Ex:
# Add a placeholder for the `price` variable:
price = 59
text = f"The price is {price} dollars"
print(text)

# A placeholder can also include a modifier to format the value.

# A modifier is included by adding a colon `:` followed by a legal formatting type, like `.2f` which means "fixed point number" with 2 decimals:

# Ex:
# Display the price with 2 decimals:
price = 59
text = f"The price is {price:0.2f} dollars"
print(text)


# Perform Operations in F-Strings:

# You can perform Python operations inside the placeholders.
# You can do math operations:

# Ex:
# Perform a math operation in the placeholder, and return the result:
text = f"The price is {20 * 59} dollars"
print(text)

# You can perform math operations on variables:

# Ex:
# Add taxes before displaying the price:
price = 59
tax = 0.25
text = f"The price is {price + (price * tax)} dollars"
print(text)

# You can perform `if...else` statements inside the placeholders:

# Ex:
# Return "Expensive" if the price is over 50, otherwise return "Cheap":
price = 49
text = f"It is very {'Expensive' if price > 50 else 'Cheep'}"
print(text)


# Execute Functions in F-Strings:

# You can execute functions inside the placeholder:

# Ex:
# Use the string method `upper()` to convert a value into upper case letters:
fruit = "apples"
text = f"I love {fruit.upper()}"
print(text)


# The function does not have to be a built-in Python method, you can create your own functions and use them:


# Ex:
# Create a function that converts feet into meters:
def my_converter(x):
    return x * 0.3048


text = f"The plane is flying at a {my_converter(3000):0.2f} meter altitude"
print(text)


# More Modifiers:

# There are several other modifiers that can be used to format values:

# Ex:
# Use a comma as a thousand separator:
price = 5900000
text = f"The price is {price:,} dollars"
print(text)
