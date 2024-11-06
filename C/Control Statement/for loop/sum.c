#include<stdio.h>
#include<conio.h>

int main(int argc, char const *argv[])
{
  long int sum, i;
  sum = 0;

  for ( i = 1; i <= 1000; i++)
  {
    sum = sum + i;
  }
  printf("Sum of all numbers from 1 to 1000 is %ld", sum);
  
  return 0;
}
