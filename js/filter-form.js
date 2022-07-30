import { LOW_PRICE, HIGHT_PRICE } from './constants.js';

const mapFiltersForm = document.querySelector('.map__filters');

const initializeFilterForm = (fetchData, updateData) => {
  mapFiltersForm.addEventListener('change', () => {
    fetchData().then(async (httpResponse) => {
      const data = await httpResponse.json();

      // описывает фильтры
      let filteredData = data.filter((item) => {
        const formValue = mapFiltersForm.elements['housing-guests'].value;
        return formValue === 'any' || item.offer.guests === parseInt(formValue, 10);
      }).filter((item) => {
        const formValue = mapFiltersForm.elements['housing-type'].value;
        return formValue === 'any' || item.offer.type === formValue;
      }).filter((item) => {
        const formValue = mapFiltersForm.elements['housing-price'].value;
        return formValue === 'any' || (item.offer.price < LOW_PRICE && formValue === 'low')
          || (item.offer.price >= HIGHT_PRICE && formValue === 'high')
          || (item.offer.price >= LOW_PRICE && item.offer.price < HIGHT_PRICE && formValue === 'middle');
      }).filter((item) => {
        const formValue = mapFiltersForm.elements['housing-rooms'].value;
        return formValue === 'any' || item.offer.rooms === parseInt(formValue, 10);
      });

      mapFiltersForm.elements['features'].forEach((feature) => {
        if (feature.checked) {
          filteredData = filteredData.filter((item) => item.offer.features && item.offer.features.includes(feature.value));
        }
      });

      updateData(filteredData);
    });
  });
};

const resetFilterForm = () => {
  mapFiltersForm.reset();
};

export { initializeFilterForm, resetFilterForm };
