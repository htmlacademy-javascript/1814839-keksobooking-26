import { formFieldsReset, setUserFormSubmit } from './user-form.js';
import { resetMapItems } from './markers.js';
import { resetImages } from './images.js';

const formOfAdvertResetButton = document.querySelector('.ad-form__reset');

const onResetButtonClick = () => {
  formFieldsReset();
  resetMapItems();
  resetImages();
};

formOfAdvertResetButton.addEventListener('click', onResetButtonClick);

setUserFormSubmit(onResetButtonClick);
