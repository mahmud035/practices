/* In C programming, there are two ways to pass arguments to a function : pass-by-value and pass-by-reference.

Pass-by-value is when a copy of the argument is passed to the function.In other words, the value of the argument is copied and assigned to a new memory location within the function.Any changes made to the argument within the function do not affect the original value of the argument outside of the function.Here's an example: */

#include <stdio.h>

void square(int x)
{
  x = x * x; // square x
  printf("The value of x inside the function is: %d\n", x);
}

int main()
{
  int num = 5;
  printf("The value of num before calling the function is: %d\n", num);
  square(num); // call square function with num as argument
  printf("The value of num after calling the function is: %d\n", num);
  return 0;
}

// Output :

/*  The value of num before calling the function is : 5 The value of x inside the function is : 25 The value of num after calling the function is : 5
```
In this example,the function `square` takes an integer `x` as argument,and squares it.When we call the `square` function with `num` as the argument, a copy of `num` is passed to the function.The function squares the copy of `num` and prints its value, but the original value of `num` remains unchanged outside of the function.

Pass-by-reference is when a reference to the argument is passed to the function.In other words,
the function receives the memory address of the argument and can modify the original value of the argument by dereferencing the memory address. Here's an example: */

#include <stdio.h>

void square(int *x)
{
  *x = *x * *x; // square the value at the memory address x
  printf("The value of x inside the function is: %d\n", *x);
}

int main()
{
  int num = 5;
  printf("The value of num before calling the function is: %d\n", num);
  square(&num); // call square function with a pointer to num as argument
  printf("The value of num after calling the function is: %d\n", num);
  return 0;
}

// Output :

/* The value of num before calling the function is : 5 The value of x inside the function is : 25 The value of num after calling the function is : 25
```
In this example, the function `square` takes a pointer to an integer `x` as argument, and squares the value at the memory address pointed to by `x`.When we call the `square` function with a pointer to `num` as the argument, the function modifies the value of `num` by dereferencing the pointer and squaring the value at the memory address.The original value of `num` is changed as a result. */