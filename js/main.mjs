import './filter-form.mjs';
import './map.mjs';
import './markers.mjs';

import { getData } from './api.mjs';
import { initializeMarkers } from './markers.mjs';

getData(initializeMarkers);

// import { initializeFormHandlers } from './filter-form.mjs';

// да 1. Запросить данные
// да 2. проинициадизиовать маркеры
// 3. повесить хендлеры на форму
// 4. описать фильтры
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

