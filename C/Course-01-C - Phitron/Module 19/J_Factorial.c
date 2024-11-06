#include <stdio.h>

long long int fun(int n)
{
  // base case
  if (n == 0)
  {
    return 1;
  }
  else
  {
    return (n * fun(n - 1));
  }
}

int main()
{

  long long int n;
  scanf("%lld", &n);
  long long int fact = fun(n);
  printf("%lld", fact);

  return 0;
}