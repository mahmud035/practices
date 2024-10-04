# Python - Format - Strings:
# String Format:
# We can combine strings and numbers by using "f-strings" or the `format()` method!

# F-Strings:
# F-String was introduced in Python 3.6, and is now the preferred way of formatting string.
# To specify a string as an f-string, simply put an `f` in front of the string literal, and add curly brackets `{}` as placeholders for variables and other operations.

# Ex:
# Create an f-string:
age = 36
text = f"My name is John, I am {age} years old."
print(text)

# Placeholders and Modifiers:
# A placeholder can contain variables, operations, functions, and modifiers to format the value.

# Ex:
# Add a placeholder for the `price` variable:
price = 60
text = f"The price is {price} dollars"
print(text)

# A placeholder can include a "modifier" to format the value.
# A modifier is included by adding a colon `:` followed by a legal formatting type, like `.2f` which means fixed point number with 2 decimals:

# Ex:
# Display the price with 2 decimals:
price = 60
text = f"The price is {price:.2f} dollars"
print(text)

# A placeholder can contain Python Code, like math operations:

# Ex:
# Perform a math operation in the placeholder, and return the result:
text = f"The price is {20 * 60} dollars"
print(text)
