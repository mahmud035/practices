#include <stdio.h>

int main()
{
  int row, col;
  scanf("%d %d", &row, &col);
  int a[row][col];

  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      scanf("%d", &a[i][j]);
    }
  }

  // print exact row
  int rowNo = 2;
  for (int i = 0; i < col; i++)
  {
    printf("%d ", a[rowNo][i]);
  }

  printf("\n");

  // print exact column
  int colNo = 2;
  for (int i = 0; i < row; i++)
  {
    printf("%d ", a[i][colNo]);
  }

  return 0;
}

// a[0][0] a[0][1] a[0][2]
// a[1][0] a[1][1] a[1][2]
// a[2][0] a[2][1] a[2][2]
// a[3][0] a[3][1] a[3][2]
// a[4][0] a[4][1] a[4][2]