#include <stdio.h>

void fun(int *ar, int n)
{
  // dereference (will change original value)
  ar[0] = 500;
  *(ar + 1) = 600;
}

int main()
{
  int ar[5] = {10, 20, 30, 40, 50};
  fun(ar, 5);

  for (int i = 0; i < 5; i++)
  {
    printf("%d ", ar[i]);
  }

  return 0;
}