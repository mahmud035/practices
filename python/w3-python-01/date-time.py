# Python Datetime:

# Python Dates:

# A date in Python is not a data type of its own, but we can import a module named `datetime` to work with dates as date objects.

# Ex:
# Import the `datetime` module and display the current date:
import datetime

now = datetime.datetime.now()

print(now)
print(now.year)
print(now.strftime("%A"))


# Creating Date Objects:

# To create a date, we can use the `datetime()` class (constructor) of the `datetime` module.

# The `datetime()` class requires three parameters to create a data: year, month, day.

# Ex:
# Create a date object:
import datetime

date = datetime.datetime(2020, 5, 17)

print(date)

# The `datetime()` class also takes parameters for time and timezone (hour, minute, second, microsecond, tzone), but they are optional, and has a default value of `0`, (`None` for timezone).


# The strftime() Method:

# The `datetime` object has a method for formatting date objects into readable strings.

# The method is called `strftime()`, and takes one parameter, `format`, to specify the format of the returned string:

# Ex:
# Display the name of the month:
import datetime

date = datetime.datetime(2018, 6, 1)

print(date.strftime("%B"))
