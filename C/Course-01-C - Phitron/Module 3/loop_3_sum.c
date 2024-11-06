#include <stdio.h>

int main()
{

  int sum = 0;
  int i;
  int n;
  scanf("%d", &n);

  for (i = 1; i <= n; i++)
  {
    sum = sum + i;
  }

  printf("%d ", sum);

  // NOTE: If sum is greater than nine digit

  // long long int sum = 0;
  // int i;
  // int n;
  // scanf("%d", &n);

  // for (i = 1; i <= n; i++)
  // {
  //   sum = sum + i;
  // }

  // printf("%llf ", sum);

  return 0;
}