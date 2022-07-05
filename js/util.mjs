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

const addPadStart = (amount, string, number) => String(string).padStart(amount, number);
//здесь сделано без передачи объекта параметров, потому что, на мой взгляд, так читаемее

const getRandomElement = (array) => {
  if (array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return Error('Массив не должен быть пустым!');
};

const controlAppendElement = (params) => {
  if (params.data) {
    params.element.querySelector(params.selector).textContent = params.data;
  } else {
    params.element.querySelector(params.selector).remove();
  }
};

const createPhotoElement = (params) => {
  const img = document.createElement('img');
  for (let i = 0; i < params.className.length; i++) {
    img.classList.add(params.className[i]);
  }
  img.src = params.src;
  img.width = params.width;
  img.height = params.height;

  return img;
};

const createListElement = (params) => {
  const li = document.createElement('li');
  for (let i = 0; i < params.length; i++) {
    li.classList.add(params[i]);
  }
  return li;
};
export { getRandomNumber, getRandomElement, appendRandomCountElements, controlAppendElement, getInteger, addPadStart, createPhotoElement, createListElement };
