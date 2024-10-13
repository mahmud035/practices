{
  // Overloads

  // NOTE: Function overloads in TypeScript allow you to define multiple function signatures for a single function name, enabling you to define functions that can be called in multiple ways. Here's an example:

  // Overloads
  function sayHi(name: string): string;
  function sayHi(name: string[]): string[];

  // Implementation
  function sayHi(name: unknown): unknown {
    if (typeof name === 'string') {
      return `Hi, ${name}!`;
    } else if (Array.isArray(name)) {
      return name.map((name) => `Hi, ${name}!`);
    }
    throw new Error('Invalid value');
  }

  console.log(sayHi('xx')); // Valid
  console.log(['aa', 'bb']); // Valid
}
