#include <stdio.h>

int main()
{
  double x = 5.26;
  double *ptr = &x;   // x er address store korechi
  double *ptr2 = ptr; // ptr er value store korechi

  printf("x er value - %0.2lf\n", x);
  printf("x er value - %0.2lf\n", *ptr);
  printf("ptr er size - %d\n", sizeof(ptr));

  // dereferencing (change original value)
  // *ptr = 10.20;
  *ptr2 = 100.20;
  printf("ekhon x er value - %0.2lf\n", x);
  printf("ekhon x er value - %0.2lf\n", *ptr);
  printf("ekhon x er value - %0.2lf\n", *ptr2);

  return 0;
}