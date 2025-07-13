#include<stdio.h>
#include<conio.h>

int main(int argc, char const *argv[])
{
  int i;

  printf("\n First loop\n\t");  // first loop
  for ( i = 5; i >= 1; i--)
  {
    printf("\n %d", i);
  }

  printf("\n Second loop\n\t");  // second loop
  for ( i = 10; i >= 1; i--)
  {
    printf("\n %d", i);
  }

  printf("\n Third loop\n\t");  // third loop
  for ( i = 1; i >= 10; i--)
  {
    printf("\n %d", i);
  } 

}
