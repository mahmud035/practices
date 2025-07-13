{
  // Type Indexing

  // IMPORTANT: Type indexing refers to the ability to define types that can be indexed by a key that is not known in advanced, using an "index signature" to specify the type for properties that are not explicitly declared.

  type Dictionary<T> = {
    [key: string]: T;
  };

  const myDict: Dictionary<string> = { a: 'a', b: 'b' };

  console.log(myDict['a']); // Returns 'a'
}
