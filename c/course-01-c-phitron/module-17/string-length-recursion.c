#include <stdio.h>

void stringLength(char str[], int i, int count)
{
  if (str[i] == '\0')
  {
    printf("%d ", count);
    return; // base case: stop recursion when reaches the NULL or '\0' character
  }

  count += 1;

  stringLength(str, i + 1, count);
}

int main()
{
  char str[] = "Hello World!!";
  stringLength(str, 0, 0);

  return 0;
}