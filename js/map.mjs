import { enableForm } from './form.mjs';

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
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

export { map };
