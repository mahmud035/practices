/**
 * NOTE: jokhon generic function k force kore bolbo je generic a pathano data te ei ei type er data thakte-ei hobe, othoba ei ei property thakte-ei hobe --> tokhon setake constraints in generic or generic constraints bole.
 * */

interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const myInfo2: MandatoryInterface = {
  name: 'Persian',
  age: 100,
  salary: 100000,
};

const addMeInMyCrushMind2 = <Type extends MandatoryInterface>(myInfo: Type) => {
  const crush = 'Kate';
  const newData = { ...myInfo, crush };
  return newData;
};

const result9 = addMeInMyCrushMind2<MandatoryInterface>(myInfo2);
const result11 = addMeInMyCrushMind2<MandatoryInterface>(myInfo2);

console.log(result9);
console.log(result11);

// WARN
//  NOT GOOD PRACTICE (karon ami ekhane object er vitore je kono property dite partechi. )
// const result10 = addMeInMyCrushMind2({ x: '', y: '', z: '' });

// console.log(result10);
