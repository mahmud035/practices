#include <stdio.h>

void printArrayReverse(int ar[], int i, int length)
{

  if (i < 0)
  {
    return; // base case: stop recursion when i reaches less than 0
  }

  printf("%d ", ar[i]);

  printArrayReverse(ar, i - 1, length);
}

int main()
{
  int ar[] = {1, 2, 3, 4, 5};
  int length = sizeof(ar) / sizeof(int);
  printArrayReverse(ar, length - 1, length);

  return 0;
}