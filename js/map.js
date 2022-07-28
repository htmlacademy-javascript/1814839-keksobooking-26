import { enableUserForm, disableUserForm } from './user-form.js';
import { TOKYO_LAT, TOKYO_LNG } from './constants.js';

const initializeMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      enableUserForm();
    })
    .setView({
      lat: TOKYO_LAT,
      lng: TOKYO_LNG,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  return map;
};

if (!initializeMap) {
  disableUserForm();
}

export { initializeMap };
