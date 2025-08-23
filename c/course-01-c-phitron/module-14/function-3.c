#include <stdio.h>

void add(int a, int b)
{
  int sum = a + b;
  printf("Sum: %d\n", sum);
}

int main()
{
  int a, b;
  scanf("%d%d", &a, &b);
  add(a, b);

  return 0;
}