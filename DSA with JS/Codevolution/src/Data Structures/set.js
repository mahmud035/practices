// Create a Set
const letters = new Set(['a', 'b', 'c']);

letters.add('d');
letters.add('e');

for (const letter of letters) {
  console.log(letter); // a, b, c, d, e
}

typeof letters; // Returns object

letters instanceof Set; // Returns true

const isAExist = letters.has('a'); // Returns true

const numOfLetters = letters.size; // Returns 5
