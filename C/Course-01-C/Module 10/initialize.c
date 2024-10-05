#include <stdio.h>

int main()
{
  // char name[] = {'P', 'A', 'V', 'E', 'L', '\0'}; // no guarantee

  char name[] = "PAVEL";
  printf("%s\n", name);

  int size = sizeof(name) / sizeof(char);
  printf("%d\n", size);

  return 0;
}