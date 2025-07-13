//  Vowel Count
//*  My Solution

#include <stddef.h>

size_t get_count(const char *s)
{
  const char *vowels = "aeiou";
  size_t count = 0;

  for (const char *c = s; *c; ++c)
  {
    if (strchr(vowels, *c))
    {
      count++;
    }
  }

  return count;
}
