#include <stdio.h>

int main()
{

  int row, col;
  scanf("%d %d", &row, &col);
  int a[row][col];
  int element = row * col;

  // take input
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      scanf("%d", &a[i][j]);
    }
  }

  int count = 0;

  // check
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      if (a[i][j] == 0)
      {
        count++;
      }
    }
  }

  if (element == count)
  {
    printf("Zero Matrix");
  }
  else
  {
    printf("Not zero Matrix");
  }

  return 0;
}