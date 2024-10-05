const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];

function getSumOfEvenNumbers(array: number[]): number {
  let sum = 0;

  array.forEach((element) => {
    if (element % 2 === 0) {
      sum += element;
    }
  });

  return sum;
}

console.log(getSumOfEvenNumbers(arrayOfNumbers));
