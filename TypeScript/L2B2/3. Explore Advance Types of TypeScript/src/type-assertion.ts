let emni: any;

emni = 'Next level web development';

(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === 'string') {
    const value = parseFloat(param) * 1000;
    return `The converted result is ${value} gram`;
  }
  if (typeof param === 'number') {
    const value = param * 1000;
    return value;
  }
}

// type-assertion
const resultToBeNumber = kgToGram(100) as number;
const resultToBeString = kgToGram('100') as string;

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
