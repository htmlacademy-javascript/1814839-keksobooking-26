const getRandomNumber = (min, max) => (Math.random() * (max - min + 1) + min);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getArray = (features) => {
  const maxLength = features.length;
  const arrayLength = Math.floor(getRandomNumber(1, maxLength));

  return shuffleArray(features).slice(0, arrayLength);
};

const getRandomArrayElement = (array) => (array[Math.floor(Math.random() * array.length)]);

export { getRandomNumber, getRandomArrayElement, getArray };
