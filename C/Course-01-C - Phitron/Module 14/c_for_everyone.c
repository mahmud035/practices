#include <stdio.h>

void sum_of_all(void)
{
  int n, sum;
  sum = 0;
  for (n = 0; n <= 100; n++)
  {
    sum += n;
  }
  printf("%d ", sum);
}
long int find_factorial(long int n)
{
  if (n <= 1)
  {
    return 1;
  }
  else
  {
    return (n * find_factorial(n - 1));
  }
}
void use_static(void)
{
  static int count = 1;
  printf("main() calls use_static() %d times\n", count);
  count++;
}

int main()
{
  long int x;

  sum_of_all();
  x = find_factorial(5);
  printf("\nFactorial is: %ld\n", x);
  use_static();

  return 0;
}