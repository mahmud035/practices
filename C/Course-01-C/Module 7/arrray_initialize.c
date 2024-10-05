#include <stdio.h>

int main()
{
  int arr[5] = {0};
  // int arr[] = {10, 20, 30, 40, 50};

  // NOTE: both are same.

  for (int i = 0; i < 5; i++)
  {
    printf("%d\n", arr[i]);
  }

  return 0;
}