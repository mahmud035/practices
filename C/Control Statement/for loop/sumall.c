#include<stdio.h>
#include<conio.h>

int main(int argc, char const *argv[])
{
  long int i, range, sum;

  printf("\n How many numbers do you want to calculate: ");
  scanf("%ld", &range);

  sum = 0;

  for ( i = 1; i <= range; i++)
  {
    sum = sum + i;
  }

  printf("\n Sum of all numbers from 1 to %ld is %ld", range, sum);

  return 0;
}
