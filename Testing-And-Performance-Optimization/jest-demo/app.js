const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid Argument Type');
  }

  return a + b;
};

const isEven = (num) => {
  if (typeof num !== 'number') {
    throw new Error('Invalid Argument Type');
  }

  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  add,
  isEven,
};
