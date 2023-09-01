"""
Fiona DeMendonca
Aug 31: Python classes
"""

# Create a class.


class MyClass:
    num = 5


# Create an object for class MycClass
p1 = MyClass()
print(p1)
print(f'\n Object num = {p1.num}')


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Object method
    def printObject(self):
        print(f'Hello! my name is {self.name}')


# Create an object and initialize values
person1 = Person("John", 30)
print(f'Object name = {person1.name}')
print(f'Object age = {person1.age}')

# Printing an object method
print(f'\n {person1.printObject()}')

# delete properties using del
del person1.name

# pass statement


class House:
    pass


print(f'print {House}')

print('\n -----class Chair -----')
print('\n ----------------------\n')


class Chair:
    # accessible property
    chair_color = 'brown'

    def __init__(self, height, width, length):
        self.height = height
        self.__width = width  # '__' make the property very private
        self.length = length

        self.length *= 2

    # Define method to print result
    def print_result(self):
        print(f'The length of chair is: {self.length}')

    # pass the height
    def get_height(self):
        return self.height

    def get_color(self):
        return self.chair_color

    # Update class values
    def set_price(self, price):
        self._price = price  # '_' make the property private


# Initialize an object for class Chair
chair1 = Chair(12, 30, 10)
chair1.print_result()
print(f'The chair height {chair1.get_height()}')
print(f'\n The chair color is {chair1.chair_color}')
# Update the price data
chair1.set_price(20)
print(f'Chair price {chair1._price}')
# print(f'\n Very private width = {chair1.__width}')
