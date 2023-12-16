//* object destructuring with defaultValue
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

const {
  age,
  education: { degree } = {},
  education: { school: { name } } = {},
} = user;

console.log(degree);
console.log(name);
