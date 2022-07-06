const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const deactivates = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = true;
  });
  node.classList.add('ad-form--disabled');
};

const inactivates = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = false;
  });
  node.classList.remove('ad-form--disabled');
};

const inactivateAll = () => {
  deactivates(adFormFieldsets, adForm);
  deactivates(mapFiltersFieldsets, mapFilters);
};

const activateAll = () => {
  inactivates(adFormFieldsets, adForm);
  inactivates(mapFiltersFieldsets, mapFilters);
};

export { inactivateAll, activateAll };
