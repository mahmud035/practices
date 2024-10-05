#include <stdio.h>
#include <conio.h>
#include <string.h>

int main()
{
  char msg[] = "Copyright @ 1997 home computing group";
  // printf("%s", msg);

  // 1. Print String Using Loop

  char *city_name[3] = {"Dhaka",
                        "Khulna",
                        "Rajshahi"};
  int i;
  for (i = 0; i < 3; i++)
  {
    // printf("\nCity name [%d] is %s.", i + 1, city_name[i]);
  }

  // 2. Get String as Input and Print It

  /*

   char name[64];
   printf("\n Your name please: ");
   gets(name);
   printf("\n\n So, you are %s\n", name);
   puts(name);

   */

  // 3. String Copy

  char name_1[30] = "John Doe";
  char name_2[30];
  strcpy(name_2, name_1);
  // printf("Programmer name is: %s\n", name_2);

  // 4. String Length

  char address[] = "Islampara, Gopalganj.";
  int length = strlen(address);
  // printf("Address length: %d\n", length);

  // 5. String Concatenation

  char country_name[36] = "People's Republic of ";
  strcat(country_name, "Bangladesh");
  // printf("Country name: %s\n", country_name);

  // 6. Compare Two String

  /*

    char str1[30], str2[40];
    int x;
    printf("\n Enter first string:");
    gets(str1);

    printf("\n Enter second string:");
    gets(str2);

    x = strcmp(str1, str2);
    if (0 != x)
    {
      printf("\n\n Two string's are not equal");
    }
    else
    {
      printf("\n\n Two string's are equal");
    }

  */

  // 7. Convert UPPER CASE letter

  /*

   char ch[30];
   printf("\n Enter your string:");
   gets(ch);
   strupr(ch);
   printf("\n Uppercase of  your string:");
   puts(ch);

  */

  // 8. Convert lower case letter

  /*

   char ch[30];
   printf("\n Enter your string:");
   gets(ch);
   strlwr(ch);
   printf("\n Lowercase of  your string:");
   puts(ch);

  */

  // 9. Reverse The String

  /*

    char name[30];
    printf("\n Enter your name:");
    gets(name);
    strrev(name);
    printf("\n\n Reverse: %s", name);

  */

  // 10. Duplicate String (NOT Working Properly)

  /*

  char name[30], name1[40];
  printf("\n Enter string to duplicate:");
  gets(name);

  if ((name1 == strdup(name)))
  {
    printf("\n Duplicate string: %s", name1);
  }
  else
  {
    printf("\n Sorry! there is an error occurs");
  }

  */

  // 11. Find String Inside Another String

  /*

    char main_string[100], sub_string[100], *pos;
    printf("\n Enter a string: ");
    gets(main_string);

    printf("\n Enter a word that will search in the above string: ");
    gets(sub_string);

    pos = strstr(main_string, sub_string);

    if (pos)
    {
      printf("\n %s found at position %d.", sub_string, (int)(pos - main_string));
    }
    else
    {
      printf("\n %s not found.", sub_string);
    }

  */

  return 0;
}