#include <stdio.h>

int main()
{

  printf("for loop:\n");

  for (int i = 1; i <= 5; i++)
  {
    printf("%d\n", i);
  }

  // while
  printf("while loop:\n");

  int i = 1;
  while (i <= 5)
  {
    printf("%d\n", i);
    i++;
  }

  // do while
  printf("do-while loop:\n");

  int j = 1;
  do
  {
    printf("%d\n", j);
    j++;
  } while (j <= 5);

  return 0;
}