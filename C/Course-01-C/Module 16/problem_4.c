#include <stdio.h>

// 1. Function with return value and parameter
int add(int a, int b)
{
  return a + b;
}

// 2. Function with return value and no parameter
float getPi()
{
  return 3.14159;
}

// 3. Function with no return value but with parameter
void printMessage(char message[])
{
  printf("%s\n", message);
}

// 4. Function with no return value and no parameter
void greet()
{
  printf("Hello, world!\n");
}

int main()
{
  // Calling the functions
  int result = add(3, 4);
  printf("Result of addition: %d\n", result);

  float pi = getPi();
  printf("Value of pi: %f\n", pi);

  char message[] = "This is a message.";
  printMessage(message);

  greet();

  return 0;
}
