#include<stdio.h>
#include<conio.h>

int main(int argc, char const *argv[])
{
  int i;

  printf("\n First loop \n");  // first loop
  for ( i = 1; i <= 10; i++)
  {
    printf("\n %d", i);
  }

  printf("\n\n Second loop \n");  // second lop
  for ( i = 1; i <= 15; i++)
  {
    printf("\n %d", i);
  }

  printf("\n\n Third loop \n");  // third lop
  for ( i = 100; i <= 5; i++)
  {
    printf("\n %d", i);
  }

  printf("\n\n Fourth loop\n"); // fourth loop (DECREMENT)
  for ( i = 10; i >= 1; i--)
  {
    printf("\n %d", i);
  }
  
  return 0;
}    
