#include <stdio.h>

int main()
{
  int row, col;
  scanf("%d %d", &row, &col);
  int a[row][col];

  // take input
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      scanf("%d", &a[i][j]);
    }
  }

  // check
  int flag = 1; // assume matrix is unit

  if (row != col)
  {
    flag = 0;
  }

  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      if (i == j && a[i][j] != 1)
      {
        flag = 0;
      }
      if (i != j && a[i][j] != 0)
      {
        flag = 0;
      }
    }
  }

  if (flag == 1)
  {
    printf("Unit matrix");
  }
  else
  {
    printf("Not Unit matrix");
  }

  return 0;
}