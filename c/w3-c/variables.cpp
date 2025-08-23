#include<bits/stdc++.h>
using namespace std;

int main()
{
  // Declaring (Creating) Variables:
  // Syntax: `type` variableName = value;

  int myNum = 15;
  cout << myNum << endl;

  int myNum2;
  myNum2 = 30;
  cout << myNum2 << endl;

  // NOTE: Note that if you assign a new value to an existing variable, it will overwrite the previous value:

  int myNum3 = 3; // myNum3 is 3
  myNum3 = 4;  // Now myNum3 is 4
  cout << myNum3 << endl; // Outputs 4

  // Other Types
  // A demonstration of other data types:
  int myNum5 = 5;
  double myFloatNum = 5.99;
  char myLetter = 'C';
  string myText = "Hello";
  bool myBoolean = true;

  // Display Variables
  // To combine both text and a variable, separate them with the `<<` operator:

  int myAge = 29;
  cout << "I am " << myAge << " years old." << endl;

  // Add Variables Together
  // To add a variable to another variable, you can use the `+` operator:

  int x = 5;
  int y = 6;
  int sum = x + y;
  cout << sum;

  return 0;
}