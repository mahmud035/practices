#include <stdio.h>

int main()
{
  int n;
  scanf("%d", &n);

  // Upper half of the pattern
  for (int i = 1; i <= n; i++)
  {
    // Print spaces
    for (int j = 1; j <= n - i; j++)
    {
      printf(" ");
    }

    // Print numbers
    for (int j = 1; j <= 2 * i - 1; j++)
    {
      printf("%d", j);
    }

    printf("\n");
  }

  // Lower half of the pattern
  for (int i = n - 1; i >= 1; i--)
  {
    // Print spaces
    for (int j = 1; j <= n - i; j++)
    {
      printf(" ");
    }

    // Print numbers
    for (int j = 1; j <= 2 * i - 1; j++)
    {
      printf("%d", j);
    }

    printf("\n");
  }

  return 0;
}
