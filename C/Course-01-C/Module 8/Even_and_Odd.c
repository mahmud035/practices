#include <stdio.h>

int main()
{
  int n;
  scanf("%d", &n);

  int arr[n];

  for (int i = 0; i < n; i++)
  {
    scanf("%d", &arr[i]);
  }

  int evenSum = 0;
  int oddSum = 0;

  for (int i = 0; i < n; i++)
  {
    if (arr[i] % 2 == 0)
    {
      evenSum = evenSum + arr[i];
    }
    else
    {
      oddSum = oddSum + arr[i];
    }
  }

  printf("%d %d", evenSum, oddSum);

  return 0;
}