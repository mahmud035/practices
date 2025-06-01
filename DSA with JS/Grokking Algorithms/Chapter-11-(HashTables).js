// Hash Tables: A hash table is a fixed-sized data structure in which the size is defined at the start.

// NOTE: Both quadratic probing and double-hashing are great techniques to reduce the number of collisions in a hash table.

/* 
  A hash table is a fixed-sized data structure in which the size is defined at the start.
  Hash tables are implemented using a hash function to generate an index for the array.
  A good hash function is deterministic, efficient, and uniformly distributive. Hash collisions
  should be minimized with a good uniformly distributive hash function, but having some
  collisions is unavoidable. Hash collision-handling techniques include but are not limited
  to linear probing (incrementing the index by 1), quadratic probing (using a quadratic
  function to increment the index), and double-hashing (using multiple hash functions).
*/

//* Probing
// Linear Probing: Linear probing works by finding the next available index by incrementing one index at a time.

// The main disadvantage of linear probing is it easily creates clusters, which are bad because they create more data to iterate through.

//* Using Linear Probing

class LinearHashTable {
  constructor(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
  }

  initArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(null);
    }
    return array;
  }

  hash(key) {
    if (!Number.isInteger(key)) throw new Error('Must be int');
    return key % this.size;
  }

  put(key, value) {
    if (this.limit >= this.size) throw new Error('Hash table is full');

    let hashedIndex = this.hash(key);

    // Linear probing
    while (this.keys[hashedIndex] !== null) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
  }

  get(key) {
    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] !== key) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
  }
}

const linearHashTable = new LinearHashTable(13);
console.log(linearHashTable.initArray(13));
console.log(linearHashTable.keys);
console.log(linearHashTable.values);

linearHashTable.put(7, 'hi');
linearHashTable.put(20, 'hello');
linearHashTable.put(33, 'sunny');
linearHashTable.put(46, 'weather');
linearHashTable.put(59, 'wow');
linearHashTable.put(72, 'forty');
linearHashTable.put(85, 'happy');
linearHashTable.put(98, 'sad');

console.log(linearHashTable.get(7)); // hi
console.log(linearHashTable.get(85)); // happy

console.log(linearHashTable);

// Here is the result:
// Keys: [ 85, 98, null, null, null, null, null, 7, 20, 33, 46, 59, 72]
// Values: [ 'happy', 'sad', null, null, null, null, null, 'hi', 'hello', 'sunny', 'weather', 'wow', 'forty' ]

// =======================================================

// Quadratic Probing: Quadratic probing is a good technique for addressing the cluster issue. Quadratic probing uses perfect squares instead of incrementing by 1 each time, and this helps to evenly distribute across the available indices,

//* Using Quadratic Probing
class QuadraticHashTable {
  constructor(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
  }

  initArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(null);
    }
    return array;
  }

  hash(key) {
    if (!Number.isInteger(key)) throw new Error('Must be int');
    return key % this.size;
  }

  put(key, value) {
    if (this.limit >= this.size) throw new Error('Hash table is full');

    let hashedIndex = this.hash(key);
    let squareIndex = 1;

    // Quadratic probing
    while (this.keys[hashedIndex % this.size] !== null) {
      hashedIndex = hashedIndex + Math.pow(squareIndex, 2);
      squareIndex++;
    }

    this.keys[hashedIndex % this.size] = key;
    this.values[hashedIndex % this.size] = value;
    this.limit++;
  }

  get(key) {
    let hashedIndex = this.hash(key);
    let squareIndex = 1;

    while (this.keys[hashedIndex % this.size] !== key) {
      hashedIndex += Math.pow(squareIndex, 2);
      hashedIndex = hashedIndex % this.size;
      squareIndex++;
    }
    return this.values[hashedIndex % this.size];
  }
}

const quadraticHashTable = new QuadraticHashTable(13);
console.log(quadraticHashTable.initArray(13));
console.log(quadraticHashTable.keys);
console.log(quadraticHashTable.values);

quadraticHashTable.put(7, 'hi');
quadraticHashTable.put(20, 'hello');
quadraticHashTable.put(33, 'sunny');
quadraticHashTable.put(46, 'weather');
quadraticHashTable.put(59, 'wow');
quadraticHashTable.put(72, 'forty');
quadraticHashTable.put(85, 'happy');
quadraticHashTable.put(98, 'sad');

console.log(quadraticHashTable.get(7)); // hi
console.log(quadraticHashTable.get(85)); // happy

console.log(quadraticHashTable);

// Here is the result:
// Keys: [ null, null, null, 85, 72, null, 98, 7, 20, null, 59, 46, 33 ]
// Values: [ null, null, null, 'happy', 'forty', null, 'sad', 'hi', 'hello', null, 'wow', 'weather', 'sunny' ]

// This result is more uniformly distributed than the result from linear probing. It would be easier to see with a bigger array size and more elements.

// =======================================================

// Rehashing/Double-Hashing: Another great way to uniformly distribute the keys is by having a second hashing function that hashes the result from the original

// Finally, let’s combine double-hashing and linear probing. Recall the common second hash function, hash2(x) = R − (x % R), where x is the result from hashing the first time, and R is less than the size of the hash table.

//* Using Double-Hashing with Linear Probing

class DoubleHashing {
  constructor(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
  }

  initArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(null);
    }
    return array;
  }

  hash(key) {
    if (!Number.isInteger(key)) throw new Error('Must be int');
    return this.secondHash(key % this.size);
  }

  secondHash(hashedKey) {
    const R = this.size - 2;
    return R - (hashedKey % R);
  }

  put(key, value) {
    if (this.limit >= this.size) throw new Error('Hash table is full');

    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] !== null) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
  }

  get(key) {
    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] !== null) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }

    return this.values[hashedIndex];
  }
}

const doubleHashing = new DoubleHashing(13);
console.log(doubleHashing.initArray(13));
console.log(doubleHashing.keys);
console.log(doubleHashing.values);

doubleHashing.put(7, 'hi');
doubleHashing.put(20, 'hello');
doubleHashing.put(33, 'sunny');
doubleHashing.put(46, 'weather');
doubleHashing.put(59, 'wow');
doubleHashing.put(72, 'forty');
doubleHashing.put(85, 'happy');
doubleHashing.put(98, 'sad');

console.log(doubleHashing.get(7)); // hi
console.log(doubleHashing.get(85)); // happy

console.log(doubleHashing);

// Here is the result:
// Keys: [ null, 59, 20, 85, 98, 72, null, 7, null, 46, null, 33, null ]
// Values: [ null, 'wow', 'hello', 'happy', 'sad', 'forty', null, 'hi', null, 'weather', null, 'sunny', null ]
