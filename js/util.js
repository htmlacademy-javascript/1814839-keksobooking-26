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

export {
  getRandomNonInteger, createPhotoElement, createListElement, showSuccessMessage,
  showErrorMessage, debounce
};
