#include <stdio.h>
int main()
{
    char lower;
    printf("Enter any lowercase letter :");
    scanf("%c", &lower); // 97

    printf("The uppercase letter : %c", lower - 32); // 65
}
