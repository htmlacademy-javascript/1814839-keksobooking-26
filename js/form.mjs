const formOfAdvert = document.querySelector('.ad-form');
const formOfAdvertFields = formOfAdvert.querySelectorAll('fieldset');
const filtersOfAdverts = document.querySelector('.map__filters');
const filtersOfAdvertsFields = filtersOfAdverts.querySelectorAll('fieldset');
const roomsField = formOfAdvert.querySelector('[name="rooms"]');
const capacityField = formOfAdvert.querySelector('[name="capacity"]');

const roomsCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

// активация и деактивация формы

const disableFormFields = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = true;
  });
  node.classList.add('ad-form--disabled');
};

const enableFormFields = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = false;
  });
  node.classList.remove('ad-form--disabled');
};

const disableForm = () => {
  disableFormFields(formOfAdvertFields, formOfAdvert);
  disableFormFields(filtersOfAdvertsFields, filtersOfAdverts);
};

const enableForm = () => {
  enableFormFields(formOfAdvertFields, formOfAdvert);
  enableFormFields(filtersOfAdvertsFields, filtersOfAdverts);
};

// валидация формы

const pristine = new Pristine(formOfAdvert,
  {
    classTo: 'ad-form__label',
    errorTextParent: 'ad-form__label',
    errorTextClass: 'ad-form__label--error'
  },
  true
);

const validateCapacity = () => roomsCapacity[roomsField.value].includes(capacityField.value);

const getCapacityErrorMessage = () => `Размещение в ${roomsField.value} ${roomsField.value === '1' ? 'комнате' : 'комнатах'} для ${capacityField.value} ${capacityField.value === '1' ? 'гостя' : 'гостей'} невозможно`;

pristine.addValidator(roomsField, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacityField, validateCapacity, getCapacityErrorMessage);

formOfAdvert.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { disableForm, enableForm };
