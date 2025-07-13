#include <stdio.h>

int main()
{
  int a = 1000000000;
  printf("%d\n", a);

  long long int b = 10000000000000;
  printf("%lld\n", b);

  float f = 200.4353450354343243243;
  printf("%f\n", f);

  double d = 200.4353450354343243243;
  printf("%lf\n", d);
  printf("%0.15lf", d);

  return 0;
}