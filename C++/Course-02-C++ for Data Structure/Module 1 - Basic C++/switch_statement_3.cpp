#include<bits/stdc++.h>
using namespace std;

int main()
{
  int a;
  cin >> a;

  switch(a % 2){ // 0 or 1
    case 0:
      cout << "Even" << endl;
      break;
    case 1:
      cout << "Odd" << endl;
      break;
  }

  return 0;
}