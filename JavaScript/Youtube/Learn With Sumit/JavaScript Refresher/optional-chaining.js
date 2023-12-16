//* optional chaining
const user = {
  id: 339,
  name: 'Sumit',
  age: 42,
  education: {
    degree: 'Graduate',
    school: {
      name: 'Rangpur Zilla School',
    },
  },
};

const schoolName = user?.education?.school?.name;
console.log(schoolName);
