#include<stdio.h>
#include<conio.h>

int main(int argc, char const *argv[])
{
  int score, grade;
  printf("\n Enter your score: ");
  scanf("%d",  &score);

  grade = score / 10;

  switch (grade)
  {
  case 10:
  case 9 :
  case 8 :
    printf("\n Your letter grade is A+");
    break;
  case 7 :
    printf("\n Your letter grade is A");
    break;
  case 6 :
    printf("\n Your letter grade is A-");
    break;
  case 5 :
    printf("\n Your letter grade is B");
    break;
  case 4 :
    printf("\n Your letter grade is C");
    break;

  default:
    printf("\n Your letter grade is F");
    break;
  }

  return 0;
}
