#include <stdio.h>

void printNumbers(int n)
{

  if (n == 6)
  {
    return; // base case: stop recursion when n becomes 6
  }

  printf("%d ", n); // print the current number

  printNumbers(n + 1); // recursive call with n+1
}

int main()
{

  printNumbers(1);

  return 0;
}