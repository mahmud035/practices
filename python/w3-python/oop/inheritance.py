# Python Inheritance:

# Inheritance allows us to define a class that inherits all the methods and properties from another class.

# "Parent class" is the class being inherited from, also called base class.

# "Child class" is the class that inherits from another class, also called derived class.

# Create a Parent Class:
# Any class can be a parent class, so the syntax is the same as creating any other class:


# Ex:
# Create a class named `Person`, with `first_name` and `last_name` properties, and a print_name method:
class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def print_name(self):
        print(f"{self.first_name} {self.last_name}")


person1 = Person("Mahmudul", "Hasan")
person1.print_name()

# Create a Child Class:

# NOTE: To create a child class that inherits the functionality from another class, send the parent class as a parameter when creating the child class:


# Ex:
# Create a class named `Student`, which will inherit the properties and methods from the `Person` class:
class Student(Person):
    pass


# NOTE: Use the `pass` keyword when you do not want to add any other properties or methods to the class.

# Now the Student class has the same properties and methods as the Person class.

# Ex:
# Use the `Student` class to create an object, and then execute the `print_name` method:
student1 = Student("John", "Doe")
student1.print_name()


# Add the __init__() Function:
# So far we have created a child class that inherits the properties and methods from its parent.
# We want to add the `__init__()` function to the child class (instead of the `pass` keyword).

# NOTE: The `__init__()` function is called automatically every time the class is being used to create a new object.


# Ex:
# Add the `__init__()` function to the `Student` class:
class Student(Person):
    def __init__(self, first_name, last_name):
        Person.__init__(self, first_name, last_name)


# Now we have successfully added the __init__() function, and kept the inheritance of the parent class, and we are ready to add functionality in the `__init__()` function.


# TODO: Use the `super()` Function

# Python also has a `super()` function that will make the child class inherit all the methods and properties from its parent:


# Ex:
class Student(Person):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)


student2 = Student("Steve", "Smith")
student2.print_name()

# NOTE: By using the `super()` function, you do not have to use the name of the parent element, it will automatically inherit the methods and properties from its parent.


# Add Properties:


# Ex:
# Add a property called `graduation_year` to the `Student` class:
class Student(Person):
    def __init(self, first_name, last_name):
        super().__init__(first_name, last_name)
        self.graduation_year = 2019


# In the example below, the graduation_year `2019` should be a variable, and passed into the `Student` class when creating student objects. To do so, add another parameter in the __init__() function:


# Ex:
# Add a `year` parameter, and pass the correct year when creating objects:
class Student(Person):

    def __init__(self, first_name, last_name, graduation_year):
        super().__init__(first_name, last_name)
        self.graduation_year = graduation_year


student3 = Student("Mike", "Olsen", 2019)
student3.print_name()
print(student3.graduation_year)


# Add Methods:


# Ex:
# Add a method called `welcome` to the `Student` class:
class Student(Person):
    def __init__(self, first_name, last_name, graduation_year):
        super().__init__(first_name, last_name)
        self.graduation_year = graduation_year

    def welcome(self):
        print(
            f"Welcome, {self.first_name} {self.last_name} to the class of {self.graduation_year}"
        )


student4 = Student("Mike", "Olsen", 2024)
student4.welcome()


# NOTE: If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden.
