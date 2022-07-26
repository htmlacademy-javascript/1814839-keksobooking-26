import './filter-form.mjs';
import './map.mjs';
import './markers.mjs';

import { getData, fetchMarkers } from './api.mjs';
import { initializeMarkers, updateMarkers } from './markers.mjs';

// да 1. Запросить данные
// да 2. проинициадизиовать маркеры
// getData(initializeMarkers);

// 3. повесить хендлеры на форму
const myForm = document.getElementsByClassName('map__filters')[0];
myForm.addEventListener('change', (evt) => {
  // console.log(evt.target.tagName + " = " + evt.target.name + " = " + evt.target.value + '(' + evt.target.checked + ')');

  //fetchCallback = async function(http_response) {
  //  return await http_response.json();
  //}
  //fetchMarkers().then(fetchCallback);

  fetchMarkers().then(async (httpresponse) => {
    const data = await httpresponse.json();
    // 4. описать фильтры
    let filteredData = data.filter((item) => {
      const formVal = myForm.elements['housing-guests'].value;
      return formVal === 'any' || item.offer.guests === parseInt(formVal, 10);
    }).filter((item) => {
      const formVal = myForm.elements['housing-type'].value;
      return formVal === 'any' || item.offer.type === formVal;
    }).filter((item) => {
      const formVal = myForm.elements['housing-price'].value;
      return formVal === 'any' || (item.offer.price < 10000 && formVal === 'low')
        || (item.offer.price >= 50000 && formVal === 'high')
        || (item.offer.price >= 10000 && item.offer.price < 50000 && formVal === 'middle');
    });

    myForm.elements['features'].forEach((feature) => {
      if (feature.checked) {
        filteredData = filteredData.filter((item) => item.offer.features && item.offer.features.includes(feature.value));
      } // if
    }); // foreach

    console.log("showing " + filteredData.length + " items");
    updateMarkers(filteredData);
  });
});

// import { initializeFormHandlers } from './filter-form.mjs';


// 5, результат работы фильтров применить пункт 2
// const dataFromBackend = null
// const filterByType = (sourceData) => {
//   return sourceData.filter(data => data.offer.type === 'мрина молодец');
// };
// const filterByPrice = (sourceData) => {
//   return sourceData.filter(data => data.price.type === '10000');
// };

// const handlerForm = (evtName, value) => {
//   сonsole.log('марина молодец');
//   if (evtName === 'hмарина молодец') {

//     filterByType(value);
//   }

//   if (evtName === 'марина не молодец') {
//     const filterresult = filterByPrice(dataFromBackend);
//     initializeMarkers(filterresult);
//   }
// };

// //
// getData().then((data) => {
//   dataFromBackend = data;
//   initializeMarkers(data);
//   initializeFormHandlers(handlerForm);
// };

