#include<stdio.h>
#include<conio.h>

int main()
{
  int number;

  printf("\n Please enter a integer number:");
  scanf("%d", &number);

  if((number % 2) == 0)
  {
    printf("You entered an EVEN number");
  }

  else 
  {
    printf("You entered a ODD number");
  }
}