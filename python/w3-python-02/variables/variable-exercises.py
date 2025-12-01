a = "Hello"
b = "World"
print(a, b)
print(a + b)

a = 4
b = 5
print(a + b)

x = "awesome"


def myFunc():
    global x
    x = "fantastic"


myFunc()

print("Python is " + x)
