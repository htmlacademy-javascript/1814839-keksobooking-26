const getRandomNumber = (min, max) => (Math.random() * (max - min + 1) + min);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const appendRandomCountElements = (array) => {
  const maxLength = array.length;
  const arrayLength = Math.floor(getRandomNumber(1, maxLength));

  return shuffleArray(array).slice(0, arrayLength);
};

const getInteger = (min, max) => Math.floor(getRandomNumber(min, max));

const addPadStart = (zeroes, number) => String(number).padStart(zeroes, '0');

const getRandomElement = (array) => {
  if (array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return Error('Массив не должен быть пустым!');
};

const controlAppendElement = (params) => {
  if (params.needed) {
    params.element.querySelector(params.selector).textContent = params.data;
  } else {
    params.element.querySelector(params.selector).remove();
  }
};

export { getRandomNumber, getRandomElement, appendRandomCountElements, controlAppendElement, getInteger, addPadStart };
