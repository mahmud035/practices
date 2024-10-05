#include <stdio.h>

int main()
{
  // int x;
  // int *ptr;

  // ptr = &x;
  // *ptr = 0; // x = 0

  // printf("x = %d\n", x);
  // printf("*ptr = %d\n", *ptr);

  // *ptr += 5;
  // printf("x = %d\n", x);
  // printf("*ptr = %d\n", *ptr);

  // (*ptr)++;
  // printf("x = %d\n", x);
  // printf("*ptr = %d\n", *ptr);

  int i = 5;
  int *ptr = &i;
  int **pptr = &ptr;

  printf("%d\n", **pptr);

  return 0;
}