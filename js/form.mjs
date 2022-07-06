const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const disableElements = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = true;
  });
  node.classList.add('ad-form--disabled');
};

const enableElements = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = false;
  });
  node.classList.remove('ad-form--disabled');
};

const inactivateAll = () => {
  disableElements(adFormFieldsets, adForm);
  disableElements(mapFiltersFieldsets, mapFilters);
};

const activateAll = () => {
  enableElements(adFormFieldsets, adForm);
  enableElements(mapFiltersFieldsets, mapFilters);
};

export { inactivateAll, activateAll };
