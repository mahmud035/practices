#include <stdio.h>

int main()
{

  int givenTaka;
  scanf("%d", &givenTaka);
  int remainingTaka = givenTaka - 1000;

  if (givenTaka > 1000)
  {
    printf("I will buy Punjabi\n");

    if (remainingTaka >= 500)
    {
      printf("I will buy new shoes\n");
      printf("Alisa will buy new shoes\n");
    }
    }
  else
  {
    printf("Bad luck!");
  }

  return 0;
}