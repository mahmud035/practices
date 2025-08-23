#include <stdio.h>

void printArray(int ar[], int i, int length)
{
  if (i >= length)
  {
    return; // base case: stop recursion when i reaches the length of the array
  }

  printf("%d ", ar[i]);

  printArray(ar, i + 1, length);
}

int main()
{
  int ar[] = {1, 2, 3, 4, 5};
  int length = sizeof(ar) / sizeof(int);
  printArray(ar, 0, length);

  return 0;
}