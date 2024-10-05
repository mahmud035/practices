#include <stdio.h>

int main()
{

  int a;
  long long int b;
  float c;
  char chr;

  scanf("%d", &a);
  scanf("%lld", &b);
  scanf("%f", &c);
  scanf(" %c", &chr);

  printf("%d\n", a);
  printf("%lld\n", b);
  printf("%0.2f\n", c);
  printf("%c", chr);

  return 0;
}