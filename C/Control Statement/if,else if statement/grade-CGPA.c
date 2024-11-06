#include<stdio.h>
#include<conio.h>

int main()
{
  int score;

  printf("\n Enter your score: ");
  scanf("%d", &score);

  if ((score >= 80) && (score <= 100))
  {
    printf("\n Your letter grade is A+");
    printf("\n Your grade point is 4.00");
  }
  else if ((score >= 75) && (score <= 79))
  {
    printf("\n Your letter grade is A");
    printf("\n Your grade point is 3.75");
  }
  else if ((score >= 70) && (score <= 74))
  {
    printf("\n Your letter grade is A-");
    printf("\n Your grade point is 3.50");
  }
  else if ((score >= 65) && (score <= 69))
  {
    printf("\n Your letter grade is B+");
    printf("\n Your grade point is 3.25");
  }
  else if ((score >= 60) && (score <= 64))
  {
    printf("\n Your letter grade is B");
    printf("\n Your grade point is 3.00");
  }
  else if ((score >= 55) && (score <= 59))
  {
    printf("\n Your letter grade is B-");
    printf("\n Your grade point is 2.75");
  }
  else if ((score >= 50) && (score <= 54))
  {
    printf("\n Your letter grade is C+");
    printf("\n Your grade point is 2.50");
  }
  else if ((score >= 45) && (score <= 49))
  {
    printf("\n Your letter grade is C");
    printf("\n Your grade point is 2.25");
  }
  else if ((score >= 40) && (score <= 44))
  {
    printf("\n Your letter grade is D");
    printf("\n Your grade point is 2.00");
  }
  else
  {
    printf("\n Your letter grade is F");
  }
}