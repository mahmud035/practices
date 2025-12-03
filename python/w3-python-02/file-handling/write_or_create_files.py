# Python File Write

# Write to an Existing File

# To write to an existing file, you must add a parameter to the open() function:

# "a" - Append - will append to the end of the file

# "w" - Write - will overwrite any existing content


# Ex:
# Open the file "demo_file.txt" and append content to the file:

with open("./files/demo_file.txt", "a") as file1:
    file1.write("Now the file has more content!")

# Open and read the file after the appending:
with open("./files/demo_file.txt") as file1:
    print(file1.read())
    file1.close()
