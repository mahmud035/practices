#include <stdio.h>

int main()
{
  // declare
  int a[5][3];

  // take input
  for (int i = 0; i < 5; i++)
  {
    for (int j = 0; j < 3; j++)
    {
      // printf("a[%d][%d] ", i, j);
      scanf("%d", &a[i][j]);
    }
  }

  // print output
  for (int i = 0; i < 5; i++)
  {
    for (int j = 0; j < 3; j++)
    {
      printf("%d ", a[i][j]);
    }
    printf("\n");
  }

  return 0;
}

// a[0][0] a[0][1] a[0][2]
// a[1][0] a[1][1] a[1][2]
// a[2][0] a[2][1] a[2][2]
// a[3][0] a[3][1] a[3][2]
// a[4][0] a[4][1] a[4][3]