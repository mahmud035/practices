#include <stdio.h>

int main()
{
  int row, col;
  scanf("%d %d", &row, &col);
  int a[row][col], b[row][col], c[row][col];

  // a array
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      scanf("%d", &a[i][j]);
    }
  }

  // b array
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      scanf("%d", &b[i][j]);
    }
  }

  // create c array
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      c[i][j] = a[i][j] + b[i][j];
    }
  }

  // print c array
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      printf("%d ", c[i][j]);
    }
    printf("\n");
  }

  return 0;
}