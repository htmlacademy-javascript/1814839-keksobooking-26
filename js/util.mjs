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

const isEscKey = (evt) => evt.key === 'Escape';

const controlSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const success = successTemplate.cloneNode(true);
  document.body.append(success);

  const onSuccessButtonClick = () => {
    success.remove();
  };

  document.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', (evt) => {
    if (isEscKey(evt)) {
      success.remove();
    }
  });
};

const controlErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const error = errorTemplate.cloneNode(true);
  const errorButton = error.querySelector('.error__button');
  document.body.append(error);

  const onErrorButtonClick = () => {
    error.remove();
  };

  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', (evt) => {
    if (isEscKey(evt)) {
      error.remove();
    }
  });
};

export { getRandomNonInteger, getRandomElement, appendRandomCountElements, getRandomInteger, addPadStart, createPhotoElement, createListElement, controlSuccessMessage, controlErrorMessage };
