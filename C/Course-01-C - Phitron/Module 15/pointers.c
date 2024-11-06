#include <stdio.h>

int main()
{
  int x = 100;
  int *ptr = &x;
  printf("x er value - %d\n", x);
  printf("x er address - %p\n", &x);
  printf("ptr er value - %p\n", ptr);
  printf("ptr er address - %p\n", &ptr);

  // dereference (change original value)
  *ptr = 200;
  printf("ekhon x er value - %d\n", x);

  return 0;
}