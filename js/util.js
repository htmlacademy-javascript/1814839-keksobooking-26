//---АЛЛЕРТЫ ПРИ ВЗАИМОДЕЙСТВИИ С ФОРМОЙ---//
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const success = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const error = errorTemplate.cloneNode(true);
const errorButton = error.querySelector('.error__button');

const isEscKey = (evt) => evt.key === 'Escape';

const onErrorButtonClick = () => {
  error.remove();
};

const onErrorEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    error.remove();
  }
};

const showErrorMessage = () => {
  document.body.append(error);
  errorButton.addEventListener('click', onErrorButtonClick, { once: true });
  document.addEventListener('click', onErrorButtonClick, { once: true });
  document.addEventListener('keydown', onErrorEscKeydown, { once: true });
};

const onSuccessButtonClick = () => {
  success.remove();
};

const onSuccessEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    success.remove();
  }
};

const showSuccessMessage = () => {
  document.body.append(success);
  document.addEventListener('click', onSuccessButtonClick, { once: true });
  document.addEventListener('keydown', onSuccessEscKeydown, { once: true });
};
//------------------------------------------//

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


const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

const throttle = (callback, delayBetweenFrames) => {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {
  getRandomNonInteger, getRandomElement, appendRandomCountElements, getRandomInteger,
  addPadStart, createPhotoElement, createListElement, showSuccessMessage,
  showErrorMessage, debounce, throttle
};
