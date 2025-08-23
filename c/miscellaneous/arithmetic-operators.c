#include <stdio.h>
int main()
{
   int a, b, sum, sub, mul, div, mod;

   printf("enter two numbers : \n");
   scanf("%d%d", &a, &b);

   sum = a + b;

   printf("%d\n", sum);

   sub = a - b;

   printf("%d\n", sub);

   mul = a * b;

   printf("%d\n", mul);

   div = a / b;

   printf("%d\n", div);

   mod = a % b;

   printf("%d\n", mod);

   return 0;
}
