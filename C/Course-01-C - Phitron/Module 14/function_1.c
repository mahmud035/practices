#include <stdio.h>

int add(int x, int y); // declaration/prototype

int main()
{

  int a, b, sum;
  scanf("%d%d", &a, &b);
  sum = add(a, b); // call
  printf("Sum: %d\n", sum);

  return 0;
}

int add(int x, int y) // definition
{
  int sum = x + y;
  return sum;
}