'use strict';

// Query Converter
//* My Solution
{
  const solution = (string) => {
    const queryObject = {};

    console.log(
      string
        .split('?')
        .slice(1)
        .join('')
        .replaceAll('&', ' ')
        .split(' ')
        .forEach((str) => {
          const [key, value] = str.split('=');
          queryObject[key] = value;
        })
    );

    return queryObject;
  };

  // console.log(solution('www.whatsup.com?name=Huy&lastname=dang'));
  // console.log(
  //   solution('www.apple.com?order=iphone&status=ordered&date=Oct,2,2017')
  // );
}

// Simple remove duplicates
//* My Solution
{
  const solve = (arr) => {
    const seen = new Set();
    const result = [];

    // Iterate over the array from the end to the beginning
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!seen.has(arr[i])) {
        seen.add(arr[i]);
        result.unshift(arr[i]); // Add the element to the front of the result list
      }
    }

    return result;
  };

  // result.unshift(arr[i]) is used to add the element to the beginning of the result array, ensuring the final output is in the correct order.

  // console.log(solve([3, 4, 4, 3, 6, 3]));
}

// Remove duplicates from list
//* My Solution
{
  const distinct = (a) => [...new Set(a)];

  // console.log(distinct([1, 2, 1, 1, 3, 2]));
}

// Remove duplicate words
//* My Solution
{
  const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ');

  // console.log(
  //   removeDuplicateWords(
  //     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  //   )
  // );
}

// Quadrants
//* My Solution
{
  const quadrant = (x, y) => {
    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    if (x > 0 && y < 0) return 4;
  };

  // console.log(quadrant(1, 2)); // 1
  // console.log(quadrant(-10, 100)); // 2
  // console.log(quadrant(-1, -9)); // 3
  // console.log(quadrant(19, -56)); // 4
}

// Quadrants 2: Segments
//* My Solution
{
  class Coord {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const A = new Coord(1, 2);
  const B = new Coord(3, 4);
  // console.log(A, B);

  const quadrantSegment = (A, B) => {
    const { x: x1, y: y1 } = A;
    const { x: x2, y: y2 } = B;

    if (x1 > 0 && y1 > 0 && x2 > 0 && y2 > 0) return false;
    if (x1 < 0 && y1 > 0 && x2 < 0 && y2 > 0) return false;
    if (x1 < 0 && y1 < 0 && x2 < 0 && y2 < 0) return false;
    if (x1 > 0 && y1 < 0 && x2 > 0 && y2 < 0) return false;

    return true;
  };

  // console.log(quadrantSegment(A, B));
}

// Quadratic Coefficients Solver
//* My Solution
{
  /*
  NOTE:
  The quadratic equation: (x-x1) * (x-x2) = 0
  Expanding the expression gives: x^2 - (x1+x2)x + x1*x2 = 0
  
  From this, the coefficients a, b and c are:
  a = 1,
  b = -(x1+x2)
  c = x1*x2
  */

  const quadratic = (x1, x2) => {
    const a = 1;
    const b = -(x1 + x2);
    const c = x1 * x2;

    return [a, b, c];
  };

  // console.log(quadratic(1, 2));
  // console.log(quadratic(0, 1));
}

// Closest elevator
//* My Solution
{
  const elevator = (left, right, call) => {
    const distanceFromLeft = Math.abs(call - left);
    const distanceFromRight = Math.abs(call - right);

    return distanceFromRight <= distanceFromLeft ? 'right' : 'left';
  };

  // console.log(elevator(0, 1, 0));
  // console.log(elevator(0, 1, 1));
  // console.log(elevator(0, 1, 2));
  // console.log(elevator(0, 0, 0));
  // console.log(elevator(0, 2, 1));
}

// Elevator Distance
//* My Solution & Best Practice
{
  const elevatorDistance = (array) => {
    let distance = 0;

    for (let i = 0; i < array.length - 1; i++) {
      distance += Math.abs(array[i] - array[i + 1]);
    }

    return distance;
  };

  // console.log(elevatorDistance([5, 2, 8]));
  // console.log(elevatorDistance([7, 1, 7, 1]));
  // console.log(elevatorDistance([3, 3]));
  // console.log(elevatorDistance([4, 13, 7, 12, 18, 0, 9]));
}

// easy logs
//* My Solution
{
  /*  
  Change of base formula:
  logx(A) = log(A) / log(X)
  logx(B) = log(B) / log(X)
  */

  const logs = (X, A, B) => {
    const logA = Math.log(A) / Math.log(X);
    const logB = Math.log(B) / Math.log(X);
    return logA + logB;
  };

  // console.log(logs(10, 2, 3));
  // console.log(logs(5, 2, 3));
  // console.log(logs(1000, 2, 3));
}

// CSV representation of array
//* My Solution
{
  const toCsvText = (array) => {
    return array.map((row) => row.join(',')).join('\n');
  };

  const input = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ];

  // console.log(toCsvText(input));
}

// Contamination #1 -String-
//* My Solution
{
  const contamination = (text, char) => {
    if (text.length === 0 || char.length === 0) return '';

    return text.replace(text, char).padStart(text.length, char);
  };

  // console.log(contamination('abc', 'z')); // "zzz"
  // console.log(contamination('', 'z')); // ''
  // console.log(contamination('abc', '')); // ''
  // console.log(contamination('_3ebzgh4', '&')); // "&&&&&&&&"
  // console.log(contamination('//case', ' ')); // "      "
}

// Get Nth Even Number
//* My Solution
{
  const nthEven = (n) => n * 2 - 2;

  // console.log(nthEven(1)); // 0
  // console.log(nthEven(3)); // 4
  // console.log(nthEven(100)); // 198
  // console.log(nthEven(1298734)); // 2597466
}

// Ensure question
//* My Solution
{
  const ensureQuestion = (s) => (s.includes('?') ? s : s + '?');

  // console.log(ensureQuestion('')); // ?
  // console.log(ensureQuestion('Yes')); // 'Yes?'
  // console.log(ensureQuestion('No?')); // 'No?'
}

// Will you make it?
//* My Solution
{
  const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
    distanceToPump <= mpg * fuelLeft ? true : false;

  // console.log(zeroFuel(50, 25, 2)); // true
  // console.log(zeroFuel(100, 50, 1)); // false
}

// Simple multiplication
//* My Solution
{
  const simpleMultiplication = (number) =>
    number % 2 === 0 ? number * 8 : number * 9;

  // console.log(simpleMultiplication(2));
  // console.log(simpleMultiplication(1));
}

// Thinkful - Logic Drills: Traffic light
//* My Solution
{
  // green => yellow => red => green
  const updateLight = (current) =>
    current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';

  // console.log(updateLight('green'));
  // console.log(updateLight('yellow'));
  // console.log(updateLight('red'));
}

// All Star Code Challenge #18
//* My Solution
{
  const strCount = (str, letter) => {
    if (str.length === 0) return 0;

    let count = 0;

    [...str].forEach((char) => {
      if (char === letter) count++;
    });

    return count;
  };

  // console.log(strCount('Hello', 'o')); // 1
  // console.log(strCount('Hello', 'l')); // 2
  // console.log(strCount('', 'z')); // 0
}

// Remove String Spaces
//* My Solution
{
  const noSpace = (x) => x.split(' ').join('');

  // console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
}

// Sum Mixed Array
//* My Solution
{
  const sumMix = (x) => x.reduce((acc, curr) => acc + Number(curr), 0);

  // console.log(sumMix([9, 3, '7', '3']));
  // console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
  // console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));
}

// Sum The Array
//* My Solution
{
  Array.prototype.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0);
  };

  // const arr1 = [1, 2, 3, 4];
  // console.log(arr1.sum()); // Output: 10

  // const arr2 = [10, 28, 14, 33];
  // console.log(arr2.sum()); // Output: 85

  // var arr3 = [];
  // console.log(arr3.sum()); // Output: 0
}

// Sum Arrays
//* My Solution
{
  const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

  // console.log(sum([])); // 0
  // console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
}

// Beginner - Lost Without a Map
//* My Solution
{
  const maps = (x) => x.map((el) => el * 2);
}

// Minimize Sum Of Array (Array Series #1)
//* My Solution
{
  const minSum = (arr) => {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let sum = 0;

    for (let i = 0; i < arr.length / 2; i++) {
      sum += arr[i] * arr[arr.length - 1 - i];
    }

    return sum;
  };

  /*  
  arr[arr.length - 1 - i]:

  This is accessing the element at the index arr.length - 1 - i.
  arr.length - 1 gives you the index of the last element in the array.
  Subtracting i from arr.length - 1 gives you the index of the element that is symmetrically opposite to i when considering the array from both ends.
  For example, if i is 0 (the first element), this expression gives the last element (arr[arr.length - 1]). If i is 1 (the second element), this expression gives the second-to-last element (arr[arr.length - 2]).
  */

  // console.log(minSum([5, 4, 2, 3]));
  // console.log(minSum([12, 6, 10, 26, 3, 24]));
  // console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
}

// Product Of Maximums Of Array (Array Series #2)
//* My Solution
{
  const maxProduct = (numbers, size) => {
    // Sort the number in ascending order
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const slicedArray = sortedNumbers.slice(-size);

    return slicedArray.reduce((acc, curr) => acc * curr, 1);
  };

  // console.log(maxProduct([4, 3, 5], 2));
  // console.log(maxProduct([10, 8, 7, 9], 3));
  // console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
}

// Array Leaders (Array Series #3)
//* My Solution
{
  const arrayLeaders = (numbers) => {
    const leaders = [];

    for (let i = 0; i < numbers.length; i++) {
      let sum = 0;

      // Calculate the sum of elements to the right of the current element
      for (let j = i + 1; j < numbers.length; j++) {
        sum += numbers[j];
      }

      // Check if the current element is greater than the sum of elements to its right
      if (numbers[i] > sum) leaders.push(numbers[i]);
    }

    return leaders;
  };

  // console.log(arrayLeaders([1, 2, 3, 4, 0]));
  // console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
}

// Maximum Gap (Array Series #4)
//* My Solution
{
  const maxGap = (numbers) => {
    // Sort the numbers in descending order
    numbers.sort((a, b) => b - a);
    let maxDifference = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
      // Difference between the successive elements
      const diffInTwoElement = Math.abs(numbers[i] - numbers[i + 1]);

      if (diffInTwoElement > maxDifference) {
        maxDifference = diffInTwoElement;
      }
    }

    return maxDifference;
  };

  // console.log(maxGap([13, 10, 2, 9, 5]));
  // console.log(maxGap([24, 299, 131, 14, 26, 25]));
  // console.log(maxGap([-3, -27, -4, -2]));
}

// Product Array (Array Series #5)
//* My Solution
{
  const productArray = (numbers) => {
    const products = [];

    for (let i = 0; i < numbers.length; i++) {
      let product = 1; // Set product to 1 for each number

      for (let j = 0; j < numbers.length; j++) {
        if (i === j) continue;
        product *= numbers[j];
      }

      products.push(product);
    }

    return products;
  };

  // console.log(productArray([12, 20]));
  // console.log(productArray([1, 5, 2]));
  // console.log(productArray([10, 3, 5, 6, 2]));
}

// Maximum Triplet Sum (Array Series #7)
//* My Solution
{
  const maxTriSum = (numbers) => {
    return [...new Set(numbers)]
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, curr) => acc + curr, 0);
  };

  // console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
  // console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
  // console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
}

// Row Weights
//* My Solution & Best Practice
{
  const rowWeights = (array) => {
    const team1 = array
      .filter((_, i) => i % 2 === 0)
      .reduce((acc, curr) => acc + curr, 0);

    const team2 = array
      .filter((_, i) => i % 2 !== 0)
      .reduce((acc, curr) => acc + curr, 0);

    return [team1, team2];
  };

  // console.log(rowWeights([13, 27, 49]));
  // console.log(rowWeights([50, 60, 70, 80]));
  // console.log(rowWeights([80]));
}

// Form The Minimum
//* My Solution
{
  const minValue = (values) => {
    const smallestNumInStr = [...new Set(values)]
      .sort((a, b) => a - b)
      .join('');

    return Number(smallestNumInStr);
  };

  // console.log(minValue([1, 3, 1])); // 13
  // console.log(minValue([5, 7, 5, 9, 7])); // 579
}

// Maximum Product
//* My Solution
{
  const adjacentElementsProduct = (array) => {
    let maxProduct = array[0] * array[1];

    if (array.length === 2) return maxProduct;

    for (let i = 1; i < array.length - 1; i++) {
      if (array[i] * array[i + 1] > maxProduct) {
        maxProduct = array[i] * array[i + 1];
      }
    }

    return maxProduct;
  };

  // console.log(adjacentElementsProduct([5, 8])); // 40
  // console.log(adjacentElementsProduct([1, 2, 3])); // 6
  // console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
  // console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // -14
}

//* Best Practice
{
  const adjacentElementsProduct = (array) => {
    const newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
      newArray.push(array[i] * array[i + 1]);
    }

    return Math.max(...newArray);
  };

  // console.log(adjacentElementsProduct([5, 8])); // 40
  // console.log(adjacentElementsProduct([1, 2, 3])); // 6
  // console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
  // console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // -14
}

// Minimum Steps (Array Series #6)
//* My Solution
{
  const minimumSteps = (numbers, value) => {
    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);
    let sum = numbers[0] + numbers[1];
    let steps = 1;

    // Handle edge cases
    if (numbers.length === 3 && numbers[0] > value) {
      return --steps;
    }

    for (let i = 2; i < numbers.length; i++) {
      if (!(sum >= value)) {
        sum += numbers[i];
        steps++;
      }
    }

    return steps;
  };

  // console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6)); // 2
  // console.log(minimumSteps([8, 9, 4, 2], 23)); // 3
  // console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
  // console.log(minimumSteps([4, 6, 3], 7)); // 1
  // console.log(minimumSteps([4, 6, 3], 2)); // 0
  // console.log(minimumSteps([5, 31, 1], 14)); // 2
}

// Nth Smallest Element (Array Series #4)
//* My Solution
{
  const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

  // console.log(nthSmallest([3, 1, 2], 2)); // 2
  // console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); // 7
  // console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4)); // 2
  // console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3)); // 2
}

// Transform To Prime
//* My Solution
{
  const minimumNumber = (numbers) => {
    const isPrime = (num) => {
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;

      for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
      }

      return true;
    };

    const findNextPrime = (num) => {
      while (!isPrime(num)) {
        num++;
      }
      return num;
    };

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const nextPrime = findNextPrime(sum);
    return nextPrime - sum;
  };

  // console.log(minimumNumber([3, 1, 2])); // 1
  // console.log(minimumNumber([2, 12, 8, 4, 6])); // 5
  // console.log(minimumNumber([50, 39, 49, 6, 17, 28])); // 2
}

// Age Range Compatibility Equation
//* My Solution
{
  const datingRange = (age) => {
    let min, max;

    if (age > 14) {
      min = Math.floor(age / 2 + 7);
      max = Math.floor((age - 7) * 2);
    } else {
      min = Math.floor(age - 0.1 * age);
      max = Math.floor(age + 0.1 * age);
    }

    return `${min}-${max}`;
  };

  // console.log(datingRange(27));
  // console.log(datingRange(5));
  // console.log(datingRange(17));
}

// Draw stairs
//* My Solution
{
  const drawStairs = (n) => {
    let str = '';

    for (let i = 0; i < n; i++) {
      // Add spaces based on the current line number
      str += ' '.repeat(i) + 'I';

      // Add a new line after each line except the last one
      if (i !== n - 1) str += '\n';
    }

    return str;
  };

  // console.log(drawStairs(3));
  // console.log(drawStairs(5));
}

// Cat years, Dog years
//* My Solution
{
  const humanYearsCatYearsDogYears = (humanYears) => {
    if (humanYears === 1) return [1, 15, 15];
    if (humanYears === 2) return [2, 24, 24];

    let catYears = 24;
    let dogYears = 24;

    for (let i = 3; i <= humanYears; i++) {
      catYears += 4;
      dogYears += 5;
    }

    return [humanYears, catYears, dogYears];
  };

  // console.log(humanYearsCatYearsDogYears(1));
  // console.log(humanYearsCatYearsDogYears(2));
  // console.log(humanYearsCatYearsDogYears(10));
}

// Cat Years, Dog Years (2)
//* My Solution
{
  const ownedCatAndDog = (catYears, dogYears) => {
    let ownedCat = 0;
    let ownedDog = 0;

    // Calculate for cat
    if (catYears >= 15) ownedCat = 1;
    if (catYears >= 24) ownedCat = 2 + Math.floor((catYears - 24) / 4);

    // Calculate for dog
    if (dogYears >= 15) ownedDog = 1;
    if (dogYears >= 24) ownedDog = 2 + Math.floor((dogYears - 24) / 5);

    return [ownedCat, ownedDog];
  };

  // console.log(ownedCatAndDog(10, 70));
  // console.log(ownedCatAndDog(15, 15));
  // console.log(ownedCatAndDog(24, 24));
  // console.log(ownedCatAndDog(56, 64));
}

// Find the first non-consecutive number
//* My Solution
{
  const firstNonConsecutive = (arr) => {
    let number = null;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] === 1) continue;
      else {
        number = arr[i + 1];
        break;
      }
    }

    return number;
  };

  // console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
  // console.log(firstNonConsecutive([1, 2, 3, 4]));
}

// Grasshopper - Terminal game combat function
//* My Solution
{
  const combat = (health, damage) => (health > damage ? health - damage : 0);

  // console.log(combat(100, 5));
  // console.log(combat(92, 8));
  // console.log(combat(20, 30));
}

// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
//* My Solution
{
  const quote = (fighter) =>
    fighter.toLowerCase() === 'conor mcgregor'
      ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
      : 'I am not impressed by your performance.';

  // console.log(quote('george saint pierre'));
  // console.log(quote('conor mcgregor'));
  // console.log(quote('George Saint Pierre'));
  // console.log(quote('Conor McGregor'));
}

// Human Readable Time
//* My Solution
{
  const humanReadable = (seconds) => {
    const hh = seconds / 3600;
    const mm = (seconds % 3600) / 60;
    const ss = (seconds % 3600) % 60;

    const formatTime = (time) => `${time}`.split('.')[0].padStart(2, '0');

    return `${formatTime(hh)}:${formatTime(mm)}:${formatTime(ss)}`;
  };

  // console.log(humanReadable(0));
  // console.log(humanReadable(59));
  // console.log(humanReadable(60));
  // console.log(humanReadable(90));
  // console.log(humanReadable(3599));
  // console.log(humanReadable(3600));
  // console.log(humanReadable(45296));
  // console.log(humanReadable(86399));
  // console.log(humanReadable(86400));
  // console.log(humanReadable(359999));
}

// Human readable working hours
//* My Solution
{
  const readableTimetable = (workdays) => {
    if (workdays.length === 0) return [];

    // Define the correct order of days
    const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    // Sort workdays based on the order of the days
    workdays.sort(
      (a, b) => daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day)
    );

    // Group consecutive days with the same working hours
    let result = [];
    let currentGroup = [workdays[0]];

    for (let i = 1; i < workdays.length; i++) {
      const currIndex = daysOfWeek.indexOf(workdays[i].day);
      const prevIndex = daysOfWeek.indexOf(workdays[i - 1].day);

      if (
        workdays[i].from === currentGroup[0].from &&
        workdays[i].to === currentGroup[0].to &&
        currIndex === prevIndex + 1
      ) {
        currentGroup.push(workdays[i]);
      } else {
        result.push(currentGroup);
        currentGroup = [workdays[i]];
      }
    }
    result.push(currentGroup);

    // Format the output
    return result
      .map((group) => {
        const days = group.map((d) => d.day.toUpperCase());
        const from = group[0].from;
        const to = group[0].to;
        return days.length > 1
          ? `${days[0]} - ${days[days.length - 1]}: ${from} - ${to}`
          : `${days[0]}: ${from} - ${to}`;
      })
      .join('\n');
  };

  const test0 = [
    { day: 'mon', from: '11:00', to: '23:00' },
    { day: 'tue', from: '11:00', to: '22:00' },
    { day: 'wed', from: '11:00', to: '23:00' },
    { day: 'thu', from: '12:00', to: '22:00' },
    { day: 'fri', from: '12:00', to: '23:00' },
    { day: 'sat', from: '10:00', to: '22:00' },
    { day: 'sun', from: '11:00', to: '23:00' },
  ];

  const test1 = [
    { day: 'mon', from: '11:00', to: '23:00' },
    { day: 'tue', from: '11:00', to: '23:00' },
    { day: 'wed', from: '11:00', to: '23:00' },
    { day: 'thu', from: '12:00', to: '23:00' },
    { day: 'fri', from: '12:00', to: '23:00' },
    { day: 'sat', from: '10:00', to: '23:00' },
    { day: 'sun', from: '11:00', to: '23:00' },
  ];

  const test2 = [
    { day: 'mon', from: '11:00', to: '23:00' },
    { day: 'tue', from: '11:00', to: '23:00' },
    { day: 'thu', from: '11:00', to: '23:00' },
    { day: 'sat', from: '11:00', to: '23:00' },
    { day: 'sun', from: '11:00', to: '23:00' },
  ];

  // console.log(readableTimetable([]));
  // console.log(readableTimetable(test0));
  // console.log(readableTimetable(test1));
  // console.log(readableTimetable(test2));
}

// Find the position!
//* My Solution
{
  const position = (letter) =>
    `Position of alphabet: ${letter.charCodeAt(0) - 96}`;

  // console.log(position('a'));
  // console.log(position('z'));
  // console.log(position('e'));
}

// Time Converter: hours, minutes, seconds and milliseconds
//* My Solution
{
  const convert = (time) => {
    const hours = `${time.getHours()}`.padStart(2, '0');
    const minutes = `${time.getMinutes()}`.padStart(2, '0');
    const seconds = `${time.getSeconds()}`.padStart(2, '0');
    const milliseconds = `${time.getMilliseconds()}`.padStart(3, '0');

    return `${hours}:${minutes}:${seconds},${milliseconds}`;
  };

  // console.log(convert(new Date(2016, 2, 8, 16, 42, 59)));
  // console.log(convert(new Date(1951, 10, 31, 2, 2, 24, 399)));
  // console.log(convert(new Date(1523, 5, 29, 23, 2, 2, 9)));
  // console.log(convert(new Date(1, 1, 1, 1, 1, 1, 110)));
  // console.log(convert(new Date(9999, 9, 9, 9, 9, 9, 999)));
  // console.log(convert(new Date(2, 12, 30, 23, 59, 59, 875)));
  // console.log(convert(new Date(1850, 12, 30, 13, 39, 19)));
  // console.log(convert(new Date(1978, 3, 18, 12, 0, 0, 0)));
  // console.log(convert(new Date(1850, 12, 30, 11, 11, 11, 123)));
  // console.log(convert(new Date(1850, 12, 30, 0, 0, 0, 321)));
}

// Converting 12-hour time to 24-hour time
//* My Solution
{
  const to24hourtime = (hour, minute, period) => {
    if (period === 'am' && hour < 12) {
      return `${hour.toString().padStart(2, '0')}${minute
        .toString()
        .padStart(2, '0')}`;
    }

    if (period === 'am' && hour === 12) {
      return `00${minute.toString().padStart(2, '0')}`;
    }

    if (period === 'pm' && hour === 12) {
      return `12${minute.toString().padStart(2, '0')}`;
    }

    if (period === 'pm' && hour < 12) {
      return `${(hour + 12).toString().padStart(2, '0')}${minute
        .toString()
        .padStart(2, '0')}`;
    }
  };

  // "8:30 am" => "0830"
  // "8:30 pm" => "2030"
  // "12:00 am" => "0000"

  // console.log(to24hourtime(1, 0, 'am'));
  // console.log(to24hourtime(1, 0, 'pm'));
  // console.log(to24hourtime(12, 0, 'am'));
  // console.log(to24hourtime(12, 0, 'pm'));
  // console.log(to24hourtime(6, 30, 'am'));
  // console.log(to24hourtime(9, 45, 'pm'));
}

// Easy Time Convert
//* My Solution
{
  const timeConvert = (num) => {
    if (num === 0 || num < 0) return '00:00';

    const hours = `${num / 60}`.split('.')[0].padStart(2, '0');
    const minutes = `${num % 60}`.padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  // 78 => "01:18"

  // console.log(timeConvert(0));
  // console.log(timeConvert(-6));
  // console.log(timeConvert(8));
  // console.log(timeConvert(32));
  // console.log(timeConvert(75));
}

// Human readable duration format
//* My Solution
{
  const formatDuration = (seconds) => {
    if (seconds === 0) return 'now';

    const yy = Number(seconds / 31536000).toFixed(24);
    const dd = (seconds % 31536000) / 86400;
    const hh = ((seconds % 31536000) % 86400) / 3600;
    const mm = (((seconds % 31536000) % 86400) % 3600) / 60;
    const ss = (((seconds % 31536000) % 86400) % 3600) % 60;

    // Get integer time value
    const truncateTime = (time) => +`${time}`.split('.')[0];

    // console.log(truncateTime(yy));
    // console.log(truncateTime(dd));
    // console.log(truncateTime(hh));
    // console.log(truncateTime(mm));
    // console.log(truncateTime(ss));

    const timeComponent = [];

    const addTimeComponent = (time, unit) => {
      timeComponent.push(
        `${truncateTime(time)} ${
          truncateTime(time) > 1 ? unit : unit.slice(0, -1)
        }`
      );
    };

    if (truncateTime(yy) > 0) addTimeComponent(yy, 'years');
    if (truncateTime(dd) > 0) addTimeComponent(dd, 'days');
    if (truncateTime(hh) > 0) addTimeComponent(hh, 'hours');
    if (truncateTime(mm) > 0) addTimeComponent(mm, 'minutes');
    if (truncateTime(ss) > 0) addTimeComponent(ss, 'seconds');

    if (timeComponent.length === 1) return timeComponent[0];

    return (
      timeComponent.slice(0, -1).join(', ') + ' and ' + timeComponent.slice(-1)
    );
  };

  // console.log(formatDuration(1));
  // console.log(formatDuration(62));
  // console.log(formatDuration(120));
  // console.log(formatDuration(3600));
  // console.log(formatDuration(3662));
}

// Number Format
//* My Solution
{
  const numberFormat = (number) =>
    new Intl.NumberFormat('en-US').format(number);

  // console.log(numberFormat(100000));
  // console.log(numberFormat(5678545));
}

// Formatting a number as price
//* My Solution
{
  const numberToPrice = (number) => {
    if (typeof number !== 'number') return 'NaN';

    // Get the integer part of the number
    const integerPart = `${number}`.split('.')[0];

    // Get the decimal part of the number, slice it to two digits, and pad with '0' if necessary
    let floatPart =
      `${number}`.split('.')?.[1]?.slice(0, 2).padEnd(2, '0') ?? '';

    // If the number is an integer, ensure the float part is '00'
    if (floatPart === '') floatPart += '00';

    // Format the integer part with commas and concatenate with the float part
    return new Intl.NumberFormat('en-US').format(integerPart) + '.' + floatPart;
  };

  // console.log(numberToPrice(1500.129));
  // console.log(numberToPrice(-5));
  // console.log(numberToPrice(1000000.5));
  // console.log(numberToPrice('@'));
}

// Sum Strings as Numbers
//* My Solution
{
  const sumStrings = (a, b) => {
    const numA = BigInt(a);
    const numB = BigInt(b);
    const sum = numA + numB;
    return `${sum}`;
  };

  const num1 = BigInt('1234567890123456789012345678901234567890');
  const num2 = BigInt('9876543210987654321098765432109876543210');

  // console.log(sumStrings('1', '2'));
  // console.log(sumStrings('123', '456'));
  // console.log(sumStrings(num1, num2));
}

// Format phone number by template
//* My Solution
{
  const formatNumber = (number, template) => {
    const numberStr = `${number}`;
    const hashCount = (template.match(/#/g) || []).length;

    // Check if the number of digits is valid
    if (hashCount > numberStr.length) return 'Invalid phone number';

    let result = '';
    let numIndex = 0;

    for (const char of template) {
      if (char === '#') {
        result += numberStr[numIndex];
        numIndex++;
      } else {
        result += char;
      }
    }

    return result;
  };

  // console.log(formatNumber(79052479075, '+# ### ### ## ##'));
  // console.log(formatNumber(79052479075, '+# (###) ### ##-##'));
  // console.log(formatNumber(79052479075, '+# ### ### ## ##'));
  // console.log(formatNumber(81237068908090, '+## ### ### ## ##'));
  // console.log(formatNumber(8123706890, '+## ### ### ##-##'));
  // console.log(formatNumber(112, '+ () -'));
}

// Leap Years
//* My Solution
{
  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // console.log(isLeapYear(2020));
  // console.log(isLeapYear(2000));
  // console.log(isLeapYear(2015));
  // console.log(isLeapYear(2100));
}

// Convert a string to an array
//* My Solution
{
  const stringToArray = (string) => string.split(' ');

  // console.log(stringToArray('Robin Singh'));
}

// To square(root) or not to square(root)
//* My Solution
{
  const squareOrSquareRoot = (array) => {
    const result = [];

    for (const number of array) {
      if (Number.isInteger(Math.sqrt(number))) result.push(Math.sqrt(number));
      else result.push(Math.pow(number, 2));
    }

    return result;
  };

  // console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
}

// Sum without highest and lowest number
//* My Solution
{
  const sumArray = (array) => {
    // Input validation
    if (!Array.isArray(array) || array.length <= 1) return 0;

    // Find the sum of the array, highest, and lowest values
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const max = Math.max(...array);
    const min = Math.min(...array);

    // Return the sum excluding the highest and lowest values
    return sum - max - min;
  };

  // console.log(sumArray([6, 2, 1, 8, 10]));
  // console.log(sumArray([1, 1, 11, 2, 3]));
}

// Highest and Lowest
//* My Solution
{
  const highAndLow = (numbers) => {
    const numbersArray = numbers.split(' ').map((number) => +number);
    const max = Math.max(...numbersArray);
    const min = Math.min(...numbersArray);

    return `${max} ${min}`;
  };

  // console.log(highAndLow('1 2 3 4 5'));
  // console.log(highAndLow('1 2 -3 4 5'));
  // console.log(highAndLow('1 9 3 4 -5'));
}

// Abbreviate a Two Word Name
//* My Solution
{
  const abbrevName = (name) => {
    const firstLetter = name.split(' ')[0].slice(0, 1).toUpperCase();
    const secondLetter = name.split(' ')[1].slice(0, 1).toUpperCase();

    return firstLetter + '.' + secondLetter;
  };

  // console.log(abbrevName('Sam Harris'));
  // console.log(abbrevName('patrick feeney'));
}

// Hello, Name or World!
//* My Solution
{
  const hello = (name) => {
    if (name === undefined || name.length === 0) return 'Hello, World!';

    return `Hello, ${name.slice(0, 1).toUpperCase()}${name
      .slice(1)
      .toLowerCase()}!`;
  };

  // console.log(hello('john'));
  // console.log(hello('aliCE'));
  // console.log(hello());
  // console.log(hello(''));
}

// Sort Numbers
//* My Solution
{
  const solution = (nums) =>
    !Array.isArray(nums) || nums.length === 0 ? [] : nums.sort((a, b) => a - b);

  // console.log(solution([1, 2, 10, 50, 5]));
  // console.log(solution(null));
}

// Split Strings
//* My Solution
{
  const solution = (str) => {
    if (str.length === 0) return [];

    // If the string length is odd, append an underscore
    if (str.length % 2 !== 0) str += '_';

    // Split string into pairs
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
      pairs.push(str.slice(i, i + 2));
    }

    return pairs;
  };

  // console.log(solution('abc'));
  // console.log(solution('abcdef'));
}

// Sorted Arrays
//* My Solution
{
  const nthSmallest = (...args) => {
    const n = args.pop();
    return args.flat().sort((a, b) => a - b)[n - 1];
  };

  // console.log(nthSmallest([2, 4, 6, 8, 10, 12], 5)); // 10
  // console.log(nthSmallest([2, 2, 2, 2, 2], 3)); // 2
  // console.log(nthSmallest([2, 8, 12], [4, 6, 10], 5)); // 10
  // console.log(nthSmallest([1, 5], [2], [4, 8, 9], 4)); // 5
  // console.log(nthSmallest([1], [2], [3], [4], [5, 6, 7, 8], [9], [10], 7)); // 7
}

// Lottery Ticket
//* My Solution
{
  const bingo = (ticket, win) => {
    let miniWins = 0;

    for (let i = 0; i < ticket.length; i++) {
      const subArray = ticket[i];
      const str = subArray[0];
      const num = subArray[1];

      for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) === num) {
          miniWins += 1;
          break;
        }
      }
    }

    return miniWins >= win ? 'Winner!' : 'Loser!';
  };

  // console.log(
  //   bingo(
  //     [
  //       ['ABC', 65],
  //       ['HGR', 74],
  //       ['BYHT', 74],
  //     ],
  //     2
  //   )
  // );

  // console.log(
  //   bingo(
  //     [
  //       ['ABC', 65],
  //       ['HGR', 74],
  //       ['BYHT', 74],
  //     ],
  //     1
  //   )
  // );

  // console.log(
  //   bingo(
  //     [
  //       ['HGTYRE', 74],
  //       ['BE', 66],
  //       ['JKTY', 74],
  //     ],
  //     3
  //   )
  // );
}

// Highest Scoring Word
//* My Solution
{
  const high = (x) => {
    const scores = [];
    const words = x.split(' ');

    // Calculate each word score
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let score = 0;

      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        score += char.charCodeAt(0) - 96;
      }
      scores.push(score);
    }

    // Get the height scoring word index
    const index = scores.indexOf(Math.max(...scores));

    // Return the highest scoring word as a string.
    return words[index];
  };

  // console.log(high('man i need a taxi up to ubud'));
  // console.log(high('take me to semynak'));
  // console.log(high('aa b'));
  // console.log(high('b aa'));
  // console.log(high('bb d'));
  // console.log(high('d bb'));
  // console.log(high('aaa b'));
}

// You only need one - Beginner
//* My Solution
{
  const check = (arr, x) => arr.includes(x);

  // console.log(check([66, 101], 66));
  // console.log(check(['t', 'e', 's', 't'], 'e'));
}

// Stop gninnipS My sdroW!
//* My Solution
{
  const spinWords = (string) => {
    const words = string.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let reversedWord = '';

      if (word.length >= 5) {
        for (let j = word.length - 1; j >= 0; j--) {
          const char = word[j];
          reversedWord += char;
        }
        result.push(reversedWord);
      } else {
        result.push(word);
      }
    }

    return result.length > 1 ? result.join(' ') : result.join('');
  };

  // console.log(spinWords('Hey fellow warriors'));
  // console.log(spinWords('This is a test'));
  // console.log(spinWords('This is another test'));
  // console.log(spinWords('Welcome'));
}

// Powers of 2
//* My Solution
{
  const powersOfTwo = (n) => {
    const result = [];

    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }

    return result;
  };

  // console.log(powersOfTwo(0));
  // console.log(powersOfTwo(1));
  // console.log(powersOfTwo(2));
}

// MakeUpperCase
//* My Solution
{
  const makeUpperCase = (str) => str.toUpperCase();

  // console.log(makeUpperCase(''));
  // console.log(makeUpperCase('hello'));
  // console.log(makeUpperCase('Hello'));
  // console.log(makeUpperCase('HELLO'));
}

// Find min and max
//* My Solution
{
  const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];

  // console.log(getMinMax([1]));
  // console.log(getMinMax([1, 2]));
  // console.log(getMinMax([2, 1]));
}

// String character frequency
//* My Solution (NOT Completed Yet)
{
  // How to approach it 👇
  // 1. Count the frequency of each character.
  // 2. Analyze the frequencies to see if removing one character can make the rest of the counts equal.

  const solve = (str) => str.length;

  // console.log(solve('aaaa'));
  // console.log(solve('abba'));
  // console.log(solve('abbba'));
  // console.log(solve('aabbcc'));
}

// String repeat
//* My Solution
{
  const repeatStr = (n, s) => s.repeat(n);

  // console.log(repeatStr(6, 'I'));
  // console.log(repeatStr(5, 'Hello'));
}

// Get number from string
//* My Solution
{
  const getNumberFromString = (s) => +s.match(/[0-9]/g).join('');

  // console.log(getNumberFromString('hell5o wor6ld'));
}

// Parse float
//* My Solution
{
  const parseF = (s) => {
    const num = Number.parseFloat(s);
    return Number.isFinite(num) ? num : null;
  };

  // console.log(parseF('1'));
  // console.log(parseF('abc'));
}

// Calculate BMI
//* My Solution
{
  const bmi = (weight, height) => {
    const bmi = weight / (height * height);

    if (bmi <= 18.5) return 'Underweight';
    if (bmi <= 25.0) return 'Normal';
    if (bmi <= 30.0) return 'Overweight';
    if (bmi > 30) return 'Obese';
  };

  // console.log(bmi(80, 1.8));
}

// Array Calculator
//* My Solution
{
  const evaluate = (arr) => {
    const isNumber = (value) => Number.isFinite(+value);

    if (!isNumber(arr.at(0)) || !isNumber(arr.at(-1))) {
      return undefined;
    }

    const inputs = [];

    // Filter out valid inputs
    for (let i = 0; i < arr.length; i++) {
      if (isNumber(arr.at(i)) && isNumber(arr.at(i + 1))) {
        return undefined;
      } else {
        inputs.push(arr[i]);
      }
    }

    // First, handle multiplication (*) in the array
    while (inputs.includes('*')) {
      const index = inputs.indexOf('*');
      const product =
        parseFloat(inputs.at(index - 1)) * parseFloat(inputs.at(index + 1));
      inputs.splice(index - 1, 3, product.toString());
    }

    // Then, handle addition (+) in the array
    while (inputs.includes('+')) {
      const index = inputs.indexOf('+');
      const sum =
        parseFloat(inputs.at(index - 1)) + parseFloat(inputs.at(index + 1));
      inputs.splice(index - 1, 3, sum.toString());
    }

    // The final result will be the only remaining element
    return parseFloat(inputs[0]);
  };

  // console.log(evaluate(['10', '+', '20', '*', '3']));
  // console.log(evaluate(['10', '+', '20', '*', '3', '+', '30']));
  // console.log(evaluate(['10', '+', '20', '*', '3', '*']));
  // console.log(evaluate(['+', '10', '+', '20', '*', '3']));
  // console.log(evaluate(['10', '10', '+', '20', '*', '3']));
}

// Reversing Words in a String
//* My Solution
{
  const reverse = (string) => string.split(' ').reverse().join(' ');

  // console.log(reverse('Hello World'));
  // console.log(reverse('Hi There.'));
}

// Reversed Words
//* My Solution
{
  const reverseWords = (string) => string.split(' ').reverse().join(' ');

  // console.log(reverseWords('hello world!'));
}

// Reverse every other word in the string
//* My Solution
{
  const reverse = (str) => {
    // Handle empty or whitespace-only strings
    if (str.trim() === '') return '';

    // Split by one or more spaces
    const words = str.trim().split(/\s+/);
    const result = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (i % 2 === 0) {
        result.push(word); // Keep the word as is for even indices
      } else {
        result.push(word.split('').reverse().join('')); // Reverse the word for odd indices
      }
    }

    return result.join(' '); // Join with a single space between words
  };

  // console.log(reverse('Reverse this string, please!'));
  // console.log(reverse("I really don't like reversing strings!"));
  // console.log(reverse('  Reverse  every other word  '));
}

// Thinkful - Number Drills: Blue and red marbles
//* My Solution
{
  const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
    return (
      (blueStart - bluePulled) /
      (blueStart + redStart - (bluePulled + redPulled))
    );
  };

  // console.log(guessBlue(5, 5, 2, 3));
  // console.log(guessBlue(5, 7, 4, 3));
  // console.log(guessBlue(12, 18, 4, 6));
}

// Is there a vowel in there?
//* My Solution
{
  const isVow = (numbers) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const charCodeOfVowels = [97, 101, 105, 111, 117];

    return numbers.map((num) => {
      if (charCodeOfVowels.includes(num)) {
        const index = charCodeOfVowels.indexOf(num);
        return vowels[index];
      }
      return num;
    });
  };

  // console.log(
  //   isVow([
  //     118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
  //     120, 106,
  //   ])
  // );
  // console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
}

// The Vowel Code
//* My Solution
{
  const encode = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    for (const char of string) {
      if (vowels.includes(char)) {
        const index = vowels.indexOf(char) + 1;
        newStr += index;
        continue;
      }
      newStr += char;
    }

    return newStr;
  };

  // console.log(encode('hello'));
  // console.log(encode('How are you today?'));

  const decode = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const values = [1, 2, 3, 4, 5];
    let newStr = '';

    for (const char of string) {
      if (values.includes(+char)) {
        const index = values.indexOf(+char);
        newStr += vowels[index];
        continue;
      }
      newStr += char;
    }

    return newStr;
  };

  // console.log(decode('h3 th2r2'));
  // console.log(decode('h2ll4'));
}

// Vowel Count
//* My Solution
{
  const getCount = (string) => {
    const vowels = 'aeiou';
    let count = 0;

    for (const char of string) {
      if (vowels.includes(char)) count++;
    }

    return count;
  };

  // console.log(getCount('abracadabra'));
}

// Vowel remover
//* My Solution
{
  const shortcut = (string) => {
    const vowels = 'aeiou';
    let newStr = '';

    for (const char of string) {
      if (!vowels.includes(char)) newStr += char;
    }

    return newStr;
  };

  // console.log(shortcut('hello'));
  // console.log(shortcut('codewars'));
}

// Move all vowels
//* My Solution
{
  const moveVowel = (string) => {
    const vowels = 'aeiou';
    let vowelStr = '';
    let newStr = '';

    for (const char of string) {
      if (vowels.includes(char)) {
        vowelStr += char;
        continue;
      }
      newStr += char;
    }

    return newStr + vowelStr;
  };

  // console.log(moveVowel('day'));
  // console.log(moveVowel('apple'));
}

// Is it a palindrome?
//* My Solution
{
  function isPalindrome(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }

    return str.toLowerCase() === reverseStr.toLowerCase();
  }

  // console.log(isPalindrome('a'));
  // console.log(isPalindrome('aba'));
  // console.log(isPalindrome('Abba'));
  // console.log(isPalindrome('hello'));
}

// Training JS #1: create your first JS function and print "Hello World!"
//* My Solution
{
  function helloWorld() {
    const str = 'Hello World!';
    console.log(str);
  }
}

// Training JS #2: Basic data types--Number
//* My Solution
{
  let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

  function equal1() {
    let a = v1;
    let b = v1;
    return a + b;
  }

  //Please refer to the example above to complete the following functions
  function equal2() {
    let a = v3; // set number value to a
    let b = v1; // set number value to b
    return a - b;
  }

  function equal3() {
    let a = v1; // set number value to a
    let b = v5; // set number value to b
    return a * b;
  }

  function equal4() {
    let a = v4; // set number value to a
    let b = v5; // set number value to b
    return a / b;
  }

  function equal5() {
    let a = v2; // set number value to a
    let b = v4; // set number value to b
    return a % b;
  }

  // console.log(equal1());
  // console.log(equal2());
  // console.log(equal3());
  // console.log(equal4());
  // console.log(equal5());
}

// Training JS #3: Basic data types--String
//* My Solution
{
  let a1 = 'A',
    a2 = 'a',
    b1 = 'B',
    b2 = 'b',
    c1 = 'C',
    c2 = 'c',
    d1 = 'D',
    d2 = 'd',
    e1 = 'E',
    e2 = 'e',
    n1 = 'N',
    n2 = 'n';

  const Dad = () => d1 + a2 + d2;
  const Bee = () => b1 + e2 + e2;
  const banana = () => b2 + a2 + n2 + a2 + n2 + a2;

  // answer some questions if you finished works above
  const answer1 = () => n2 + 'o';
  const answer2 = () => n2 + 'o';
  const answer3 = () => 'y' + e2 + 's';

  // console.log(Dad());
  // console.log(Bee());
  // console.log(banana());
  // console.log(answer1());
  // console.log(answer2());
  // console.log(answer3());
}

// Training JS #4: Basic data types--Array
//* My Solution
{
}

// Training JS #4: Basic data types--Array
//* My Solution
{
  const getLength = (arr) => arr.length;
  const getFirst = (arr) => arr[0];
  const getLast = (arr) => arr[arr.length - 1];
  const pushElement = (arr) => {
    arr.push(4);
    return arr;
  };
  const popElement = (arr) => {
    arr.pop();
    return arr;
  };

  // console.log(getLength([1, 2, 3]));
  // console.log(getFirst([1, 2, 3]));
  // console.log(getLast([1, 2, 3]));
  // console.log(pushElement([1, 2, 3]));
  // console.log(popElement([1, 2, 3]));
}

// Training JS #5: Basic data types--Object
//* My Solution
{
  const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

  const obj = { name: 'dog', legs: 4, color: 'white' };
  // console.log(animal(obj));
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else
//* My Solution
{
  const trueOrFalse = (value) => (value ? 'true' : 'false');

  let a = 1,
    b = 2;
  // console.log(trueOrFalse(a > b));
}

// Training JS #7: if..else and ternary operator
//* My Solution
{
  const saleHotdogs = (n) => {
    return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
  };

  // console.log(saleHotdogs(4));
  // console.log(saleHotdogs(9));
  // console.log(saleHotdogs(100));
}

// Training JS #8: Conditional statement--switch
//* My Solution
{
  const howManydays = (month) => {
    switch (month) {
      case 1:
        return 31;
      case 2:
        return 28;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
    }
  };

  // console.log(howManydays(1));
  // console.log(howManydays(4));
}

// Training JS #9: loop statement --while and do..while
//* My Solution
{
  const padIt = (str, n) => {
    let newStr = str;
    let i = 0;

    while (i < n) {
      if (i % 2 === 0) newStr = newStr.padStart(newStr.length + 1, '*');
      else newStr = newStr.padEnd(newStr.length + 1, '*');

      i++;
    }

    return newStr;
  };

  // console.log(padIt('a', 2)); // '*a*'
  // console.log(padIt('a', 3)); // '**a*'
  // console.log(padIt('a', 4)); // '**a**'
}
