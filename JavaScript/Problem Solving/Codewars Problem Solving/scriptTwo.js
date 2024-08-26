'use strict';

// Training JS #10: loop statement --for
//* My Solution
{
  const pickIt = (arr) => {
    const odd = [];
    const even = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) even.push(arr[i]);
      else odd.push(arr[i]);
    }

    return [odd, even];
  };

  // console.log(pickIt([1, 2, 3]));
}

// Training JS #11: loop statement --break,continue
//* My Solution
{
  const grabDoll = (dolls) => {
    const bag = [];

    for (let i = 0; i < dolls.length; i++) {
      if (bag.length === 3) break;

      const element = dolls[i];

      if (element === 'Hello Kitty' || element === 'Barbie doll')
        bag.push(element);
      else continue;
    }

    return bag;
  };

  // console.log(
  //   grabDoll([
  //     'Mickey Mouse',
  //     'Barbie doll',
  //     'Hello Kitty',
  //     'Hello Kitty',
  //     'Hello Kitty',
  //     'Snow white',
  //   ])
  // );
}
