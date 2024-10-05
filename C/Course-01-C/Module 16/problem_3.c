#include <stdio.h>

int count_before_zero(int arr[], int size)
{
  int count = 0;
  for (int i = 0; i < size; i++)
  {
    if (arr[i] == 0)
    {
      break;
    }
    count++;
  }
  return count;
}

int main()
{
  int arr[1000], n;
  scanf("%d", &n);
  for (int i = 0; i < n; i++)
  {
    scanf("%d", &arr[i]);
  }
  int count = count_before_zero(arr, n);
  printf("%d\n", count);
  return 0;
}
