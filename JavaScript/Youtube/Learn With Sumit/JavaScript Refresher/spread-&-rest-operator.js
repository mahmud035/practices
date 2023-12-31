{
  //* spread operator with Array
  const fruits = ['Banana', 'Orange'];

  const result = [...fruits];
  console.log(result); // ['Banana', 'Orange']

  result.push('Apple');

  console.log(result); // ['Banana', 'Orange', 'Apple']
  console.log(fruits); // ['Banana', 'Orange']

  // Ex: 02
  // WARNING: Array of objects এইভাবে copy করা যাবে না। (Deep Copy এবং Shallow Copy এর বিষয় আছে)
  // const persons = [
  //   {
  //     name: 'Sumit',
  //   },
  //   {
  //     name: 'Rakib',
  //   },
  // ];

  // const result = [...persons];
  // console.log(result);

  //* spread operator with Object
  // const language = {
  //   name: 'JavaScript',
  //   year: 1995,
  //   creator: 'Brendan Eich',
  // };

  // const result = {
  //   ...language,
  // };
  // console.log(result); // {name: 'JavaScript', year: 1995, creator: 'Brendan Eich'}

  //* "rest operator" inside Function
  const sum = (text, ...rest) => {
    console.log(rest); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    const total = rest.reduce((finalValue, currentValue) => {
      return finalValue + currentValue;
    }, 0);

    return `${text} ${total}`;
  };

  const result2 = sum('The sum is:', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(result2); // The sum is: 55
}
