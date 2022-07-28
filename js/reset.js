import { formFieldsReset, setUserFormSubmit } from './user-form.js';
import { resetMapItems } from './markers.js';

const formOfAdvertResetButton = document.querySelector('.ad-form__reset');

const onResetButtonClick = () => {
  formFieldsReset();
  resetMapItems();
};

formOfAdvertResetButton.addEventListener('click', onResetButtonClick);

setUserFormSubmit(onResetButtonClick);
