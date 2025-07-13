#include<stdio.h>
#include<conio.h>

int main()
{
  int p, q, r, s;
  float ratio;

  printf("\n Enter four integers (Seperated by space): ");
  scanf("%d %d %d %d", &p, &q, &r, &s);

  if((r-s) == 0) 
  {
    printf("\n Ratio is infinity, because (r-s) is 0.");
  }

  else 
  {
    ratio = (float)(p + q) / (float)(r - s);
    printf("\n Ration is %.2f", ratio);
  }
}
