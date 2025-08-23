#include<stdio.h>
#include<conio.h>

int main()
{
  float a, b, c;    // TAKE 3 VALUES AND FIND THE LARGEST ONE.

  printf("\n\n Enter three values (Seperated by space): ");
  scanf("%f %f %f", &a, &b, &c);

  printf("\n\n The largest value is: ");

  if (a > b)
  {
    if (a > c)
    {
      printf("%.2f", a);
    }
    else 
    {
      printf("%.2f", c);
    }
  }

  else
  {
    if (c > b)
    {
      printf("%.2f", c);
    }
    else
    {
      printf("%.2f", b);
    } 
  }
}