#include<bits/stdc++.h>
using namespace std;

int main()
{
  int x = 5;
  int y = 3;
  cout << (x > 3 && x < 10) << endl; // returns true (1)
  cout << (x > 3 || x < 4) << endl; // returns true (1)
  cout << (!(x > 3 && x < 10)) << endl; // returns false (0) 

  return 0;
}