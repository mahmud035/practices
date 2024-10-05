/**
 * Generic in Interface
 *
 * NOTE: ekta "interface" define korbo jar moddhe kichu property er type thakbe 'fixed' abong kichu property er type thakbe 'DYNAMIC'
 *  */

// Ex: 1 (generic interface)
interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush1: CrushInterface<boolean, string> = {
  name: 'Kate',
  husband: true,
  wife: 'Chokina',
};
console.log(crush1);

const crush2: CrushInterface<string> = { name: 'Kate', husband: 'Persian Vai' };
console.log(crush2);

interface HusbandInterface {
  name: string;
  salary: number;
}

const crush3: CrushInterface<HusbandInterface> = {
  name: 'Kate',
  husband: {
    name: 'Persian Vai',
    salary: 1000,
  },
};
console.log(crush3);

interface HusbandInterface2 {
  name: string;
  age: number;
  profession: string;
}

interface WifeInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<HusbandInterface2, WifeInterface> = {
  name: 'Kate',
  husband: {
    name: 'Persian Vai',
    age: 32,
    profession: 'Developer',
  },
  wife: {
    name: 'Chokina',
    age: 30,
  },
};
console.log(crush4);
