import { TOKYO_LAT, TOKYO_LNG, SIMILAR_OFFERS_COUNT } from './constants.js';
import { initializeMap } from './map.js';
import { createFullDescriptionPopup } from './full-description-popups.js';

const addressField = document.querySelector('[name = "address"]');

// ГЛАВНЫЙ МАРКЕР

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
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

const map = initializeMap();
mainPinMarker.addTo(map);

// ОСТАЛЬНЫЕ МАРКЕРЫ

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

let markers = [];

// создает маркеры по координатам из массива
const createMarkers = (array) => {
  array
    .slice(0, SIMILAR_OFFERS_COUNT)
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
      markers.push(pinMarker);
      pinMarker
        .addTo(map)
        .bindPopup(createFullDescriptionPopup(card));
    });
};

const initializeMarkers = (dataFromBackend) => {
  createMarkers(dataFromBackend);
};

const updateMarkers = (filteredData) => {
  markers.forEach((marker) => {
    marker.remove();
  });
  markers = [];
  createMarkers(filteredData);
};

// возвращает в исходное пложение
const resetMapItems = () => {
  mainPinMarker.setLatLng({
    lat: 35.652832,
    lng: 139.839478,
  });
  map.closePopup();
};

export { resetMapItems, initializeMarkers, updateMarkers, TOKYO_LAT, TOKYO_LNG };
