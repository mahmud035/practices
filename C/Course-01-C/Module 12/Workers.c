#include <stdio.h>
#include <math.h>

int main()
{
  int m1, m2, d;
  scanf("%d %d %d", &m1, &m2, &d);

  float x = (m1 * d) / m2;

  printf("%0.f", x);
  return 0;
}