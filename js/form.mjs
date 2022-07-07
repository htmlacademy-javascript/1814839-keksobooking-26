const advertAddForm = document.querySelector('.ad-form');
const advertAddFormFields = advertAddForm.querySelectorAll('fieldset');

const filtersOfAdverts = document.querySelector('.map__filters');
const filtersOfAdvertsFields = filtersOfAdverts.querySelectorAll('fieldset');

// активация и деактивация формы

const disableFormField = (formFields, form) => {
  formFields.forEach((element) => {
    element.disabled = true;
  });
  form.classList.add('ad-form--disabled');
};

const enableElements = (formFields, form) => {
  formFields.forEach((element) => {
    element.disabled = false;
  });
  form.classList.remove('ad-form--disabled');
};

const disableForm = () => {
  disableFormField(advertAddFormFields, advertAddForm);
  disableFormField(filtersOfAdvertsFields, filtersOfAdverts);
};

const enableForm = () => {
  enableElements(advertAddFormFields, advertAddForm);
  enableElements(filtersOfAdvertsFields, filtersOfAdverts);
};

// валидация формы

const pristine = new Pristine(advertAddForm);

advertAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // console.log('Можно отправлять');
  }
  // console.log('Ошибки в форме');
});

export { disableForm, enableForm };
