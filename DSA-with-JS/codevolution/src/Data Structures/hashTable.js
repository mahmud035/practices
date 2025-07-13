class HashTable {
  constructor(size) {
    this.table = new Array(size); // Initialize the hash table with a specified size
    this.size = size;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // Convert each character to its ASCII value and sum them
    }
    return hash % this.size; // Return the index within the bounds of the table size
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.table[index];

    // Create a new bucket if it doesn't exist
    if (!bucket) this.table[index] = [[key, value]];
    else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      // Update value if the key already exists
      if (sameKeyItem) sameKeyItem[1] = value;
      else bucket.push([key, value]); // Add a new key-value pair to the bucket
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(i, this.table[i]);
    }
  }
}

const table = new HashTable(50);

table.set('name', 'Bruce');
table.set('age', 25);
table.set('mane', 'Alex'); // Intentional collision (name vs mane)
table.display();

// table.set('name', 'Diana'); // Update name
// table.display();

console.log('Get name:', table.get('name')); // John Doe
console.log('Get age:', table.get('age')); // 30

table.remove('name');
console.log('After removing name:');
table.display();
