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

formOfAdvert.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

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

export { disableForm, enableForm };
