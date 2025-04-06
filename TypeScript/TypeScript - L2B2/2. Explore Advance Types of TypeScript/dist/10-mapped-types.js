"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
{
  getName: () => string;
  getAge: () => number;
}
*/
// ----------------------------------------
// Use Cases
// ----------------------------------------
// 1. Type-Safe Object Transformations
function freeze(obj) {
    return Object.freeze(obj);
}
const frozenPerson = freeze({ name: 'Alice', age: 30 });
// { id: string | null; age: number | null }
// 3. Derive Types from Configuration Objects
const config = { theme: 'dark', fontSize: 14 };
/*
{
  onThemeChange: (callback: (value: string) => void) => void;
  onVolumeChange: (callback: (value: number) => void) => void;
  theme: string;
  volume: number;
}
*/
