#include <stdio.h>
int main()
{
    char upper, lower;
    printf("Enter any uppercase : ");
    scanf("%c", &upper);

    lower = tolower(upper);
    printf("Lowercase letter :%c", lower);
}
