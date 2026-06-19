// In Browser Mode, the ESM module namespace object is sealed and
// can't be reconfigured, so vi.spyOn(module, 'method') throws.
// This module exists to practice the two documented workarounds:
//   1. vi.mock('./module.js', { spy: true }) for functions
//   2. an exported setter for exported `let` variables

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export let MODE: 'test' | 'production' = 'test';

export function changeMode(newMode: 'test' | 'production'): void {
  MODE = newMode;
}
