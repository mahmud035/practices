#include <stdio.h>

int main()
{
  int n;
  scanf("%d\n", &n);

  int arr[n];

  for (int i = 0; i < n; i++)
  {
    scanf("%d\n", &arr[i]);
  }

  int x;
  scanf("%d\n", &x);

  int answer = -1;

  for (int i = 0; i < n; i++)
  {

    if (arr[i] == x)
    {
      answer = i;
      break;
    }
  }

  printf("%d\n", answer);

  return 0;
}