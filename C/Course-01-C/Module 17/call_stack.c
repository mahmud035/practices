#include <stdio.h>

void world(void)
{
  printf("world\n");
}

void hello(void)
{
  printf("hello\n");
  world();
}

int main()
{
  hello();
  printf("end\n");

  return 0;
}