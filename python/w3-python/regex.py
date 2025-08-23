# Python RegEx:

# RegEx in Python:

# When you have imported the `re` module, you can start using regular expressions:

# Ex:
# Search the string to see if it starts with "The" and ends with "Spain":
import re

text = "The rain in Spain"
x = re.search("^The.*Spain$", text)

if x:
    print("YES! We have a match!")
else:
    print("No match")
