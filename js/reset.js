import { formFieldsReset, setUserFormSubmit } from './user-form.js';
import { resetMapItems, updateMarkers } from './markers.js';
import { resetImages } from './images.js';
import { resetFilterForm } from './filter-form.js';
import { fetchMarkers } from './api.js';

const formOfAdvertResetButton = document.querySelector('.ad-form__reset');

const onResetButtonClick = () => {
  formFieldsReset();
  resetMapItems();
  resetImages();
  resetFilterForm();
  fetchMarkers().then(async (httpResponse) => {
    const data = await httpResponse.json();
    return updateMarkers(data);
  });
};

const initializeResetForm = () => {
  formOfAdvertResetButton.addEventListener('click', onResetButtonClick);
  setUserFormSubmit(onResetButtonClick);
};

export { initializeResetForm };

