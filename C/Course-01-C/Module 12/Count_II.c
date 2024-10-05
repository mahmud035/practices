#include <stdio.h>
#include <string.h>

int main()
{
  char str[1001];
  int vowel_count = 0;
  scanf("%s", str); // input the string

  int len = strlen(str); // calculate the length of the string

  for (int i = 0; i < len; i++)
  {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
      vowel_count++; // increment vowel count if current character is a vowel
  }

  printf("%d", vowel_count); // print the vowel count

  return 0;
}
