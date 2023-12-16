const getWords = (sentence) => {
  if (typeof sentence !== 'string') {
    throw new Error('Invalid Arguments Type');
  }

  if (!sentence.includes(' ')) {
    return sentence;
  }

  return sentence.split(' ');
};

module.exports = {
  getWords,
};
