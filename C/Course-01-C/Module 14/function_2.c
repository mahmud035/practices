#include <stdio.h>

int add(void)
{
  int a, b, sum;
  scanf("%d%d", &a, &b);
  sum = (a + b);
  return sum;
}

int main()
{

  int sum = add();
  printf("Sum: %d\n", sum);

  return 0;
}