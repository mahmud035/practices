#include <stdio.h>

void add(void)
{
  int a, b, sum;
  scanf("%d%d", &a, &b);
  sum = (a + b);
  printf("Sum: %d\n", sum);
}

int main()
{
  add();
  return 0;
}