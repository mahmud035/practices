a = "bangla"
b = "desh"

# Access value from String
print(a[0])
print(a[1])

print(a[1:5])
print(a[0:3])
print(a[4:])
print(a[:3])
print(a[4:])
print(a[0:3])

#  String Formatting
a = "bangla"
print(a)
print("My favorite language is: %s" % a)

number = 436.15734723473272878
print(number)
print("%.2f" % number)
print("%.4f" % number)
print("%.1f" % number)
print("%.5f" % number)

#  a = input()
#  b = input()
#  print('My favorite languages are: %s and %s' %(a,b))

#  String Concatenation
a = "bangla"
b = "desh"

print(a + b)

x = "dhaka"
y = "barisal"
z = "sylhet"
print(x + "-" + y + "-" + z)

print("-".join((x, y, z)))  # Same work

#  Upper & Lower
c = "english"
print(c.capitalize())
print(c.upper())

print("bangladesh is my motherland. i just love her".title())

print("BANGLA".lower())
print("Bangla".lower())

print("BANGLA".casefold())
print("Bangla".casefold())

print("Bangla".swapcase())

#  String Counting & Searching
print(len(a))
print(a.count("a"))
print(c.count("e"))

sentence = "How can a clam cram in a clean cream can?"
print(sentence.count("c"))
print(sentence.count("c", 5))
print(sentence.count("c", 5, 9))

print(sentence.find("c"))
print(sentence.find("c", 5))

a = "Bangladesh is my country"

print(a.find("x"))
#  print(a.index('x'))

print(sentence.replace("c", "d"))
print(sentence.replace("?", ""))

print(sentence.strip("can?"))

print(sentence.split(" "))
