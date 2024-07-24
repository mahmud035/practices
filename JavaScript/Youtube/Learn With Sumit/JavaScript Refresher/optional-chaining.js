'use strict';

{
  //* Optional Chaining (?.)
  const user = {
    id: 339,
    name: 'Sumit',
    age: 42,
    education: {
      degree: 'Graduate',
      school: {
        schoolName: 'Rangpur Zilla School',
      },
    },
    description() {
      console.log(`${this.name} is ${this.age} years old.`);
    },
  };

  const schoolName = user?.education?.school?.schoolName;
  console.log(schoolName); // Rangpur Zilla School

  // optional chaining with method
  user?.description?.(); // Sumit is 42 years old.
}
