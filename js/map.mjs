import { enableUserForm, disableUserForm } from './user-form.mjs';

const inizializeMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      enableUserForm();
    })
    .setView({
      lat: 35.652832,
      lng: 139.839478,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  return map;
};

if (!inizializeMap) {
  disableUserForm();
}

export { inizializeMap };
