#include <stdio.h>

int main()
{
  int num1, num2;

  scanf("%d%d", &num1, &num2);

  int sum = num1 + num2;
  int sub = num1 - num2;
  int multi = num1 * num2;
  float div = (num1 * 1.0) / num2;

  printf("%d + %d = %d\n", num1, num2, sum);
  printf("%d - %d = %d\n", num1, num2, sub);
  printf("%d * %d = %d\n", num1, num2, multi);
  printf("%d / %d = %0.2f\n", num1, num2, div);

  return 0;
}