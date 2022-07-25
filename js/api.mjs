const createDataLoader = (onSuccess, onError) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Не удалось загрузить данные с сервера! Ошибка: ${response.status} ${response.statusText}`);
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((err) => {
      onError(err.message);
    });
};

// переписать, не работает на получение нескольких функций
const sendData = (data, onSuccessFuncs, onError) => {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      data,
    }
  ).then((response) => {
    if (response.ok) {
      onSuccessFuncs.forEach((func) => {
        func();
      });
    } else {
      onError();
    }
  })
    .catch(() => {
      onError();
    });
};

export { createDataLoader, sendData };
