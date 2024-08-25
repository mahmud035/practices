'use strict';

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
//* My Solution
{
  const countDevelopers = (list) =>
    list.filter(
      (item) => item.continent === 'Europe' && item.language === 'JavaScript'
    ).length;

  const list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'JavaScript',
    },
    {
      firstName: 'Maia',
      lastName: 'S.',
      country: 'Tahiti',
      continent: 'Oceania',
      age: 28,
      language: 'JavaScript',
    },
    {
      firstName: 'Shufen',
      lastName: 'L.',
      country: 'Taiwan',
      continent: 'Asia',
      age: 35,
      language: 'HTML',
    },
    {
      firstName: 'Sumayah',
      lastName: 'M.',
      country: 'Tajikistan',
      continent: 'Asia',
      age: 30,
      language: 'CSS',
    },
  ];

  // console.log(countDevelopers(list1));
}

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
//* My Solution
{
  const greetDevelopers = (list) =>
    list.map((dev) => {
      return {
        ...dev,
        greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
      };
    });

  const list1 = [
    {
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    },
  ];

  // console.log(greetDevelopers(list1));
}

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
//* My Solution
{
  const isRubyComing = (list) => list.some((dev) => dev.language === 'Ruby');

  const list1 = [
    {
      firstName: 'Emma',
      lastName: 'Z.',
      country: 'Netherlands',
      continent: 'Europe',
      age: 29,
      language: 'Ruby',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'Javascript',
    },
    {
      firstName: 'Jayden',
      lastName: 'P.',
      country: 'Jamaica',
      continent: 'Americas',
      age: 42,
      language: 'JavaScript',
    },
  ];

  // console.log(isRubyComing(list1));
}

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
//* My Solution
{
  const getFirstPython = (list) => {
    const dev = list.find((dev) => dev.language === 'Python');

    return dev !== undefined
      ? `${dev.firstName}, ${dev.country}`
      : `There will be no Python developers`;
  };

  const list1 = [
    {
      firstName: 'Mark',
      lastName: 'G.',
      country: 'Scotland',
      continent: 'Europe',
      age: 22,
      language: 'JavaScript',
    },
    {
      firstName: 'Victoria',
      lastName: 'T.',
      country: 'Puerto Rico',
      continent: 'Americas',
      age: 30,
      language: 'Python',
    },
    {
      firstName: 'Emma',
      lastName: 'B.',
      country: 'Norway',
      continent: 'Europe',
      age: 19,
      language: 'Clojure',
    },
  ];

  // console.log(getFirstPython(list1));
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
//* My Solution
{
  const countLanguages = (list) => {
    const languages = list.map((dev) => dev.language);

    return languages.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  };

  const list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C',
    },
    {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript',
    },
    {
      firstName: 'Ramon',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby',
    },
    {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C',
    },
  ];

  // console.log(countLanguages(list1));
}

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
//* My Solution
{
  const isSameLanguage = (list) => {
    const firstDevLang = list.at(0).language;

    return list.every((dev) => dev.language === firstDevLang);
  };

  const list1 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'JavaScript',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'JavaScript',
    },
    {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 65,
      language: 'JavaScript',
    },
  ];

  const list2 = [
    {
      firstName: 'Mariami',
      lastName: 'G.',
      country: 'Georgia',
      continent: 'Europe',
      age: 29,
      language: 'Python',
    },
    {
      firstName: 'Mia',
      lastName: 'H.',
      country: 'Germany',
      continent: 'Europe',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Maria',
      lastName: 'I.',
      country: 'Greece',
      continent: 'Europe',
      age: 32,
      language: 'C',
    },
  ];

  // console.log(isSameLanguage(list1));
  // console.log(isSameLanguage(list2));
}

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
//* My Solution
{
  const findSenior = (list) => {
    const maxAge = Math.max(...list.map((dev) => dev.age));

    return list.filter((dev) => dev.age === maxAge);
  };

  const list1 = [
    {
      firstName: 'Gabriel',
      lastName: 'X.',
      country: 'Monaco',
      continent: 'Europe',
      age: 49,
      language: 'PHP',
    },
    {
      firstName: 'Odval',
      lastName: 'F.',
      country: 'Mongolia',
      continent: 'Asia',
      age: 38,
      language: 'Python',
    },
    {
      firstName: 'Emilija',
      lastName: 'S.',
      country: 'Lithuania',
      continent: 'Europe',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 49,
      language: 'PHP',
    },
  ];

  // console.log(findSenior(list1));
}

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
//* My Solution
{
  const allContinents = (list) => {
    const continents = new Set(list.map((dev) => dev.continent));

    return continents.size === 5 ? true : false;
  };

  const list1 = [
    {
      firstName: 'Fatima',
      lastName: 'A.',
      country: 'Algeria',
      continent: 'Africa',
      age: 25,
      language: 'JavaScript',
    },
    {
      firstName: 'Agustín',
      lastName: 'M.',
      country: 'Chile',
      continent: 'Americas',
      age: 37,
      language: 'C',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Laia',
      lastName: 'P.',
      country: 'Andorra',
      continent: 'Europe',
      age: 55,
      language: 'Ruby',
    },
    {
      firstName: 'Oliver',
      lastName: 'Q.',
      country: 'Australia',
      continent: 'Oceania',
      age: 65,
      language: 'PHP',
    },
  ];

  // console.log(allContinents(list1));
}

// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
//* My Solution
{
  const isAgeDiverse = (list) => {
    const ageGroups = list.map((dev) => {
      const age = dev.age;

      if (age < 20) return 'teens';
      if (age >= 20 && age <= 29) return 'twenties';
      if (age >= 30 && age <= 39) return 'thirties';
      if (age >= 40 && age <= 49) return 'forties';
      if (age >= 50 && age <= 59) return 'fifties';
      if (age >= 60 && age <= 69) return 'sixties';
      if (age >= 70 && age <= 79) return 'seventies';
      if (age >= 80 && age <= 89) return 'eighties';
      if (age >= 90 && age <= 99) return 'nineties';
      if (age >= 100) return 'centenarian';
    });

    const uniqueAgeGroups = new Set(ageGroups);

    return uniqueAgeGroups.size === 10 ? true : false;
  };

  const list1 = [
    {
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 29,
      language: 'JavaScript',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Noa',
      lastName: 'A.',
      country: 'Israel',
      continent: 'Asia',
      age: 40,
      language: 'Ruby',
    },
    {
      firstName: 'Andrei',
      lastName: 'E.',
      country: 'Romania',
      continent: 'Europe',
      age: 59,
      language: 'C',
    },
    {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 60,
      language: 'C',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 75,
      language: 'Python',
    },
    {
      firstName: 'Chloe',
      lastName: 'K.',
      country: 'Guernsey',
      continent: 'Europe',
      age: 88,
      language: 'Ruby',
    },
    {
      firstName: 'Viktoria',
      lastName: 'W.',
      country: 'Bulgaria',
      continent: 'Europe',
      age: 98,
      language: 'PHP',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
    },
  ];

  // console.log(isAgeDiverse(list1));
}

// Coding Meetup #10 - Higher-Order Functions Series - Create usernames
//* My Solution
{
  const addUsername = (list) => {
    const currentYear = new Date().getFullYear();

    return list.map((dev) => ({
      ...dev,
      username: `${dev.firstName.toLowerCase()}${dev.lastName
        .slice(0, 1)
        .toLowerCase()}${currentYear - dev.age}`,
    }));
  };

  const list1 = [
    {
      firstName: 'Emily',
      lastName: 'N.',
      country: 'Ireland',
      continent: 'Europe',
      age: 30,
      language: 'Ruby',
    },
    {
      firstName: 'Nor',
      lastName: 'E.',
      country: 'Malaysia',
      continent: 'Asia',
      age: 20,
      language: 'Clojure',
    },
  ];

  // console.log(addUsername(list1));
}

// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
//* My Solution
{
  const getAverageAge = (list) => {
    const averageAge = list.reduce(
      (acc, curr, i, arr) => acc + curr.age / arr.length,
      0
    );

    return Math.round(averageAge);
  };

  const list1 = [
    {
      firstName: 'Maria',
      lastName: 'Y.',
      country: 'Cyprus',
      continent: 'Europe',
      age: 30,
      language: 'Java',
    },
    {
      firstName: 'Victoria',
      lastName: 'T.',
      country: 'Puerto Rico',
      continent: 'Americas',
      age: 70,
      language: 'Python',
    },
  ];

  // console.log(getAverageAge(list1));
}

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
//* My Solution
{
  const findAdmin = (list, lang) =>
    list.filter((dev) => dev.language === lang && dev.githubAdmin === 'yes');

  const list1 = [
    {
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 22,
      language: 'JavaScript',
      githubAdmin: 'yes',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 49,
      language: 'Ruby',
      githubAdmin: 'no',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 34,
      language: 'JavaScript',
      githubAdmin: 'yes',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
      githubAdmin: 'no',
    },
  ];

  // console.log(findAdmin(list1, 'JavaScript'));
}

// Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
//* My Solution
{
  const isLanguageDiverse = (list) => {
    const langCountObj = list
      .map((dev) => dev.language)
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

    const langValues = Object.values(langCountObj);
    const maxLangValue = Math.max(...langValues);
    const minLangValue = Math.min(...langValues);

    return maxLangValue <= 2 * minLangValue;
  };

  const list1 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'Ruby',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 43,
      language: 'Ruby',
    },
    {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 95,
      language: 'JavaScript',
    },
    {
      firstName: 'Jayden',
      lastName: 'P.',
      country: 'Jamaica',
      continent: 'Americas',
      age: 18,
      language: 'JavaScript',
    },
    {
      firstName: 'Joao',
      lastName: 'D.',
      country: 'Portugal',
      continent: 'Europe',
      age: 25,
      language: 'JavaScript',
    },
  ];

  const list2 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'Ruby',
    },
    {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 95,
      language: 'JavaScript',
    },
    {
      firstName: 'Jayden',
      lastName: 'P.',
      country: 'Jamaica',
      continent: 'Americas',
      age: 18,
      language: 'JavaScript',
    },
    {
      firstName: 'Joao',
      lastName: 'D.',
      country: 'Portugal',
      continent: 'Europe',
      age: 25,
      language: 'JavaScript',
    },
  ];

  const list3 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'Ruby',
    },
    {
      firstName: 'Jayden',
      lastName: 'P.',
      country: 'Jamaica',
      continent: 'Americas',
      age: 18,
      language: 'JavaScript',
    },
    {
      firstName: 'Joao',
      lastName: 'D.',
      country: 'Portugal',
      continent: 'Europe',
      age: 25,
      language: 'JavaScript',
    },
  ];

  const list4 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'Ruby',
    },
    {
      firstName: 'Joao',
      lastName: 'D.',
      country: 'Portugal',
      continent: 'Europe',
      age: 25,
      language: 'JavaScript',
    },
  ];

  // console.log(isLanguageDiverse(list1));
  // console.log(isLanguageDiverse(list2));
  // console.log(isLanguageDiverse(list3));
  // console.log(isLanguageDiverse(list4));
}

// Coding Meetup #14 - Higher-Order Functions Series - Order the food
//* My Solution
{
  const orderFood = (list) => {
    const mealObj = list
      .map((dev) => dev.meal)
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

    return mealObj;
  };

  const list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C',
      meal: 'vegetarian',
    },
    {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript',
      meal: 'standard',
    },
    {
      firstName: 'Ramona',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby',
      meal: 'vegan',
    },
    {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C',
      meal: 'vegetarian',
    },
  ];

  // console.log(orderFood(list1));
}

// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
//* My Solution
{
  const findOddNames = (list) => {
    return list.filter((dev) => {
      const firstName = dev.firstName;
      let sumOfASCIICodes = 0;

      for (const char of firstName) {
        sumOfASCIICodes += char.charCodeAt(0);
      }

      return sumOfASCIICodes % 2 !== 0;
    });
  };

  const list1 = [
    {
      firstName: 'Aba',
      lastName: 'N.',
      country: 'Ghana',
      continent: 'Africa',
      age: 21,
      language: 'Python',
    },
    {
      firstName: 'Abb',
      lastName: 'O.',
      country: 'Israel',
      continent: 'Asia',
      age: 39,
      language: 'Java',
    },
  ];

  // console.log(findOddNames(list1));
}

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
//* My Solution
{
  const askForMissingDetails = (list) => {
    const isValueNull = (value) => value === null;

    const findMissingProperty = (object) => {
      for (const key in object) {
        const element = object[key];
        if (element === null) return key;
      }
    };

    const result = list
      .filter(
        (dev) =>
          isValueNull(dev.firstName) ||
          isValueNull(dev.lastName) ||
          isValueNull(dev.country) ||
          isValueNull(dev.continent) ||
          isValueNull(dev.age) ||
          isValueNull(dev.language)
      )
      .map((dev) => {
        return {
          ...dev,
          question: `Hi, could you please provide your ${findMissingProperty(
            dev
          )}.`,
        };
      });

    return result;
  };

  var list1 = [
    {
      firstName: null,
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: null,
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    },
  ];

  console.log(askForMissingDetails(list1));
}
