import { formFieldsReset } from './user-form.mjs';
import { resetMapItems } from './markers.mjs';

const formOfAdvertResetButton = document.querySelector('.ad-form__reset');

const onResetButtonClick = () => {
  formFieldsReset();
  resetMapItems();
};

formOfAdvertResetButton.addEventListener('click', onResetButtonClick);

export { onResetButtonClick };
