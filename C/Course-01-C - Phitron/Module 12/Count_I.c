#include <stdio.h>

int main()
{
  int n, even_count = 0, odd_count = 0;
  scanf("%d", &n); // input size of array
  int arr[n];

  for (int i = 0; i < n; i++)
  {
    scanf("%d", &arr[i]); // input array elements

    if (arr[i] % 2 == 0) // check if element is even
      even_count++;      // increment even count
    else
      odd_count++; // increment odd count
  }

  printf("%d %d", even_count, odd_count); // print even and odd counts
  return 0;
}
