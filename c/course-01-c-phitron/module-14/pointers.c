#include <stdio.h>

int main()
{
  int x = 15;
  // printf("%p\n", &x);
  int *ptr = &x;
  printf("%p\n", ptr);

  // dereference
  printf("%d\n", *ptr);

  // change value using pointer
  *ptr = 20;
  printf("%d\n", *ptr);
  printf("%d\n", x);

  return 0;
}