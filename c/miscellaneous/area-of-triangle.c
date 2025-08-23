#include <stdio.h>
int main()
{
    float base, height, area;

    printf("Enter base and height : \n");
    scanf("%f%f", &base, &height);

    area = (.5 * base * height);

    printf("area is : %f", area);

    return 0;
}
