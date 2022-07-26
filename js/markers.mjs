import { map } from './map.mjs';
import { createFullDescriptionPopup } from './full-description-popups.mjs';
import { getData } from './api.mjs';
import { isThatType } from './filter-form.mjs';

const SIMILAR_OFFERS_COUNT = 10;

const addressField = document.querySelector('[name = "address"]');

// ГЛАВНЫЙ МАРКЕР

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

addressField.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;

// передает координаты якоря маркера полю Адрес при передвижении
mainPinMarker.on('moveend', (evt) => {
  const lat = evt.target.getLatLng().lat.toFixed(5);
  const lng = evt.target.getLatLng().lng.toFixed(5);
  addressField.value = `${lat}, ${lng}`;
});

mainPinMarker.addTo(map);

// ОСТАЛЬНЫЕ МАРКЕРЫ

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// создает маркеры по координатам из массива
const createMarkers = (array) => {
  array.slice()
    .filter((value) => isThatType(value))
    .forEach((card) => {
      const cardLat = card.location.lat;
      const cardLng = card.location.lng;

      const pinMarker = L.marker(
        {
          lat: cardLat,
          lng: cardLng,
        },
        {
          icon: pinIcon,
        });
      pinMarker
        .addTo(map)
        .bindPopup(createFullDescriptionPopup(card));
    });
};

// переписать
// const getDataAdverts = (array) => console.log(array);

getData(createMarkers);

// возвращает в исходное пложение
const resetMapItems = () => {
  mainPinMarker.setLatLng({
    lat: 35.652832,
    lng: 139.839478,
  });
  map.closePopup();
};

export { resetMapItems };
