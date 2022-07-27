import { showErrorMessage, showSuccessMessage } from './util.js';
import { sendData } from './api.js';

const formOfAdvert = document.querySelector('.ad-form');
const formOfAdvertFields = formOfAdvert.querySelectorAll('fieldset');
const filtersOfAdverts = document.querySelector('.map__filters');
const filtersOfAdvertsFields = filtersOfAdverts.querySelectorAll('fieldset');
const roomsField = formOfAdvert.querySelector('[name="rooms"]');
const capacityField = formOfAdvert.querySelector('[name="capacity"]');
const realtyTypeField = formOfAdvert.querySelector('[name="type"]');
const realtyPriceField = formOfAdvert.querySelector('[name="price"]');
const checkInTimeField = formOfAdvert.querySelector('[name="timein"]');
const checkOutTimeField = formOfAdvert.querySelector('[name="timeout"]');
const priceSlider = document.querySelector('.ad-form__slider');

const realtyMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomsCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

// АКТИВАЦИЯ И ДЕЗАКТИВАЦИЯ

const disableUserFormFields = (formFields, form) => {
  formFields.forEach((element) => {
    element.disabled = true;
  });
  form.classList.add('ad-form--disabled');
};

const enableUserFormFields = (formFields, form) => {
  formFields.forEach((element) => {
    element.disabled = false;
  });
  form.classList.remove('ad-form--disabled');
};

const disableUserForm = () => {
  disableUserFormFields(formOfAdvertFields, formOfAdvert);
  disableUserFormFields(filtersOfAdvertsFields, filtersOfAdverts);
};

const enableUserForm = () => {
  enableUserFormFields(formOfAdvertFields, formOfAdvert);
  enableUserFormFields(filtersOfAdvertsFields, filtersOfAdverts);
};

// ОЧИСТКА

const formFieldsReset = () => {
  formOfAdvert.reset();
};


// ВАЛИДАЦИЯ

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

const validateRealtyPrice = () => {
  const unit = realtyTypeField.value;
  const minCost = realtyMinPrice[unit];
  realtyPriceField.placeholder = minCost;
  return realtyPriceField.value >= minCost;
};

const getRealtyPriceErrorMessage = () => {
  const unit = realtyTypeField.value;
  return `Минимальная цена за этот тип размещения - ${realtyMinPrice[unit]} руб.`;
};

pristine.addValidator(realtyTypeField, validateRealtyPrice, getRealtyPriceErrorMessage);
pristine.addValidator(roomsField, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacityField, validateCapacity, getCapacityErrorMessage);

const onCheckOutSwitch = () => {
  checkOutTimeField.value = checkInTimeField.value;
};

const onCheckInSwitch = () => {
  checkInTimeField.value = checkOutTimeField.value;
};

checkInTimeField.addEventListener('change', onCheckOutSwitch);
checkOutTimeField.addEventListener('change', onCheckInSwitch);

disableUserForm();


// ОТПРАВКА ФОРМЫ

const setUserFormSubmit = (onSuccess) => {
  formOfAdvert.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const validate = pristine.validate();

    if (validate) {
      const formData = new FormData(evt.target);

      sendData(
        formData,
        () => [onSuccess(), showSuccessMessage()],
        () => [showErrorMessage()],
      );
    }
  });
};

// СЛАЙДЕР

noUiSlider.create(priceSlider, {
  start: [0],
  connect: [true, false],
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  step: 1,
  range: {
    'min': 0,
    'max': 100000
  }
});

priceSlider.noUiSlider.on('update', () => {
  realtyPriceField.value = priceSlider.noUiSlider.get();
});

export { enableUserForm, disableUserForm, formFieldsReset, setUserFormSubmit };
