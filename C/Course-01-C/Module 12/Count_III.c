#include <stdio.h>

int main()
{
  char s[1000];
  scanf("%s", s);
  int count[26] = {0};

  for (int i = 0; s[i] != '\0'; i++)
  {
    count[s[i] - 'a']++;
  }

  for (int i = 0; i < 26; i++)
  {
    printf("%c - %d\n", 'a' + i, count[i]);
  }
  return 0;
}