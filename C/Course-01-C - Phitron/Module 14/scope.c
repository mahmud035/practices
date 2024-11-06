#include <stdio.h>

int x = 500; // global scope

void fun(void)
{
  int s = 100; // local scope
  printf("%d\n", s);
}

int main()
{
  int s = 200; // local scope
  printf("%d\n", s);
  fun();
  return 0;
}