#include <stdio.h>

void printNumbers(int n)
{
  if (n == 0)
    return; // base case: stop recursion when n becomes 0

  printf("%d ", n); // print the current number

  printNumbers(n - 1); // recursive call with n-1
}

int main()
{

  printNumbers(5);

  return 0;
}