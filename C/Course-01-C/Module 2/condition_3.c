#include <stdio.h>

int main()
{

  int tk;

  scanf("%d", &tk);

  if (tk >= 5000)
  {
    printf("Cox's Bazar Jabo\n");

    if (tk >= 10000)
    {
      printf("Then Saint Martin Jabo\n");
    }
    else
    {
      printf("Cox's Bazar Theke Ferot Ashbo\n");
    }
  }
  else
  {
    printf("Kothao Jabo Na\n");
  }

  return 0;
}