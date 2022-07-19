import { map } from './map.mjs';
import { createRealtyDescriptionCards } from './data.mjs';
import { realtyType, controlFeaturesAppend, controlPhotosAppend, controlAvatarAppend, controlDataAppend } from './generate-popups.mjs';

const addressField = document.querySelector('[name = "address"]');

// главный маркер

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

// передает координаты якоря маркера полю Адрес
mainPinMarker.on('moveend', (evt) => {
  const lat = evt.target.getLatLng().lat.toFixed(5);
  const lng = evt.target.getLatLng().lng.toFixed(5);
  addressField.value = `${lat}, ${lng}`;
});

// остальные маркеры

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

mainPinMarker.addTo(map);

const realtyDescriptionCards = createRealtyDescriptionCards();

// попапы на маркерах

const createCustomPopup = (point) => {
  const popupTemplate = document.querySelector('#popupTemplate').content.querySelector('.popup');
  const popupElement = popupTemplate.cloneNode(true);

  controlAvatarAppend({
    url: point.author.avatar,
    selector: '.popup__avatar',
    element: popupElement,
  });

  controlDataAppend({
    element: popupElement,
    selector: '.popup__title',
    data: point.offer.title,
  });

  controlDataAppend({
    element: popupElement,
    selector: '.popup__text--address',
    data: point.offer.address,
  });

  controlDataAppend({
    element: popupElement,
    selector: '.popup__text--price',
    data: `${point.offer.price} ₽/ночь`,
  });

  controlDataAppend({
    element: popupElement,
    selector: '.popup__type',
    data: realtyType[point.offer.type],
  });

  controlDataAppend({
    element: popupElement,
    selector: '.popup__text--capacity',
    data: `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`,
  });

  controlDataAppend({
    element: popupElement,
    selector: '.popup__text--time',
    data: `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`,
  });

  popupElement.querySelector('.popup__features').innerHTML = '';
  controlFeaturesAppend(
    {
      data: point.offer.features,
      element: popupElement,
    }
  );

  popupElement.querySelector('.popup__description').textContent = point.offer.description;

  popupElement.querySelector('.popup__photos').innerHTML = '';
  controlPhotosAppend({
    data: point.offer.photos,
    element: popupElement
  });

  return popupElement;
};

// создает маркеры по координатам из массива
realtyDescriptionCards.forEach((card) => {
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
    .bindPopup(createCustomPopup(card));
});


