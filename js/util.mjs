const getRandomNonInteger = (min, max) => (Math.random() * (max - min + 1) + min);
const getRandomInteger = (min, max) => Math.floor(getRandomNonInteger(min, max));

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const appendRandomCountElements = (array) => {
  const maxLength = array.length;
  const arrayLength = Math.floor(getRandomNonInteger(1, maxLength));
  return shuffleArray(array).slice(0, arrayLength);
};

const addPadStart = (amount, string, number) => String(string).padStart(amount, number);

const getRandomElement = (array) => {
  if (array.length) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return Error('Массив не должен быть пустым!');
};

const createPhotoElement = (params) => {
  const { className, src, width, height } = params;
  const img = document.createElement('img');
  img.classList.add(...className);
  img.src = src;
  img.width = width;
  img.height = height;
  return img;
};

const createListElement = (params) => {
  const li = document.createElement('li');
  li.classList.add(...params);
  return li;
};

export { getRandomNonInteger, getRandomElement, appendRandomCountElements, getRandomInteger, addPadStart, createPhotoElement, createListElement };
