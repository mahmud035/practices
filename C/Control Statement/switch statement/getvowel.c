#include<stdio.h>
#include<conio.h>

int main(int argc, char const *argv[])
{
  char ch;

  printf("\n Enter a character: ");
  scanf("%c", &ch);

  switch (ch)
  {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    printf("\n\n Your choice is a vowel.");
    break;
  
  default:
    printf("\n\n Your choice is not a vowel.");
    break;
  }

  return 0;
}
