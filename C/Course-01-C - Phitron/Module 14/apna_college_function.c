#include <stdio.h>

// NOTE:function declaration/prototype
int sum(int, int);

int main()
{
  int a, b;
  scanf("%d%d", &a, &b);

  // NOTE: function call
  sum(a, b);

  return 0;
}

// NOTE: function definition
int sum(int a, int b)
{
  int total;
  total = a + b;
  printf("%d", total);
}
