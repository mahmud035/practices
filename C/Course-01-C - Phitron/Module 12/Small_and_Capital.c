#include <stdio.h>

int main()
{
  char str[1001];
  int i, upper_count = 0, lower_count = 0;

  // Reading input string
  scanf("%s", str);

  // Counting upper and lower case letters
  for (i = 0; str[i] != '\0'; i++)
  {
    if (str[i] >= 'A' && str[i] <= 'Z')
      upper_count++;
    else if (str[i] >= 'a' && str[i] <= 'z')
      lower_count++;
  }

  // Printing output
  printf("%d %d", upper_count, lower_count);
  return 0;
}
