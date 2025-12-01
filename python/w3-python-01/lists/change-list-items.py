# Python - Change List Items:
# Change Item Value:
# To change the value of a specific item, refer to the index number:

# Ex:
# Change the second item:
fruits = ["apple", "banana", "cherry"]
fruits[1] = "blackcurrant"
print(fruits)

# Change a Range of Item Values:
# To change the value of items with a specific range, define a list with the new values, and refer to the range of index numbers where you want to insert the new values:

# Ex:
# Change the values "banana" and "cherry" with the values "blackcurrant" and "watermelon"
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]

fruits[1:3] = ["blackcurrant", "watermelon"]
print(fruits)

# If you "insert more items" than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly:

# Ex:
# Change th second value by replacing it with two new values:
fruits = ["apple", "banana", "cherry"]
fruits[1:2] = ["blackcurrant", "watermelon"]
print(fruits)

# NOTE: The length of the list will change when the number of items inserted does not match the number of items replaced.

# If you "insert less items" than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly:

# Ex:
# Change the second and third value by replacing it with one value:
fruits = ["apple", "banana", "cherry"]
fruits[1:3] = ["watermelon"]
print(fruits)

# Insert Items:
# To insert a new list item, without replacing any of the existing values, we can use the `insert()` method.
# The `insert()` method inserts an item at the specified index:

# Ex:
# Insert "watermelon" as the third item:
fruits = ["apple", "banana", "cherry"]
fruits.insert(2, "watermelon")
print(fruits)
