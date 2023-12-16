#  Creating a tuple
a = (
    "onion",
    "potato",
    "ginger",
    "cucumber",
)
print(a)
print(type(a))

b = (
    "onion",
    "potato",
    "ginger",
    "cucumber",
    1,
    3.1416,
)
print(b)
print(type(b))

#  Access item of a tuple
print(b[0])
print(b[1])
print(b[1:5])
print(b[:5])
print(b[2:])

c = b + ("new",)
print(c)

b = (
    "onion",
    "potato",
    "ginger",
    "cucumber",
    1,
    3.1416,
)
print(len(b))
print(b.count("potato"))

print("my name is pavel")
