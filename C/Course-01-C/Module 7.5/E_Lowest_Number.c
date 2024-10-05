#include <stdio.h>
#include <limits.h>

int main()
{
  int n;
  scanf("%d", &n);

  int arr[n];

  for (int i = 0; i < n; i++)
  {
    scanf("%d", &arr[i]);
  }

  int min = INT_MAX, position;

  for (int i = 0; i < n; i++)
  {
    if (arr[i] < min)
    {
      min = arr[i];
      position = i + 1;
    }
  }

  printf("%d %d", min, position);

  return 0;
}