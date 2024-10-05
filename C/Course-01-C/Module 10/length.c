#include <stdio.h>

int main()
{
  char a[100];
  scanf("%s", a);

  int length = strlen(a);
  printf("%d\n", length);

  return 0;
}