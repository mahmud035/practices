//* object destructuring with defaultValue
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
};

const {
  age,
  education: { degree } = {},
  education: { school: { schoolName } } = {},
} = user;

console.log(degree); // Graduate
console.log(schoolName); // Rangpur Zilla School
