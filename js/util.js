const getRandomNumber = (min, max) => (Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (array) => (array[Math.floor(Math.random() * array.length)]);

const getArray = (features) => {
  const maxLength = features.length;
  const arrayLength = Math.floor(getRandomNumber(1, maxLength));
  const newArray = [];

  while (newArray.length < arrayLength) {
    const index = Math.floor(getRandomNumber(1, maxLength - 1));
    const element = features[index];

    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

export { getRandomNumber, getRandomArrayElement, getArray };
