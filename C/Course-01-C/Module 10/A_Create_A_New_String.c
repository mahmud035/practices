#include <stdio.h>
#include <string.h>

int main()
{
  char S[1001];
  char T[1001];

  scanf("%s %s", S, T);

  int sLen = strlen(S);
  int tLen = strlen(T);

  printf("%d %d\n", sLen, tLen);
  printf("%s %s", S, T);

  return 0;
}