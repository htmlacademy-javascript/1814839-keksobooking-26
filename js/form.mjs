const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const makeInactive = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = true;
  });
  node.classList.add('ad-form--disabled');
};

const makeActive = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = false;
  });
  node.classList.remove('ad-form--disabled');
};

const inactivateAll = () => {
  makeInactive(adFormFieldsets, adForm);
  makeInactive(mapFiltersFieldsets, mapFilters);
};

const activateAll = () => {
  makeActive(adFormFieldsets, adForm);
  makeActive(mapFiltersFieldsets, mapFilters);
};

export { inactivateAll, activateAll };
