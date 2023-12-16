class Calculator:
  """Do addition,  subtraction, multiplication and division
  """
  def addition(self, a, b):
    return a + b
    
  def substraction(self, a, b):
    return a - b

  def multiplication(self, a, b):
    return a * b

  def division(self, a, b):
    try:
      return a / b
    except ZeroDivisionError:
      return 'It is impossible to divide by zero.'

my_calculator = Calculator()

temp =  my_calculator.addition(12,78)      
print(temp)

temp =  my_calculator.substraction(50,23)      
print(temp)

temp =  my_calculator.multiplication(9,19)      
print(temp)

temp =  my_calculator.division(400,5)      
print(temp)

temp =  my_calculator.division(43,0)      
print(temp)




