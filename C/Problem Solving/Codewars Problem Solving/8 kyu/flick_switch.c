// Flick Switch
//* My Solution

#include <stdbool.h>
#include <stddef.h>

void flick_switch(size_t length, const char *const array[length], bool result[length])
{
  bool should_return_true = true;

  for (size_t i = 0; i < length; i++)
  {
    if (array[i] && strcmp(array[i], "flick") == 0)
    {
      should_return_true = !should_return_true;
    }

    result[i] = should_return_true;
  }
}
