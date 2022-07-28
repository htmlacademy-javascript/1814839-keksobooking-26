import { POPUP_PHOTO_WIDTH, POPUP_PHOTO_HEIGHT } from './constants.js';
import { createPhotoElement, createListElement } from './util.js';

const realtyCardTemplate = document.querySelector('#popupTemplate')
  .content
  .querySelector('.popup');

const realtyType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

//---------------------------------------------------------------------------------------------------------------//

const controlDataAppend = (params) => {
  const { element, selector, data } = params;
  if (data) {
    element.querySelector(selector).textContent = data;
  } else {
    element.querySelector(selector).remove();
  }
};

const controlAvatarAppend = (params) => {
  const { url, selector, element } = params;
  if (url) {
    element.querySelector(selector).src = url;
  } else {
    element.querySelector(selector).remove();
  }
};

const controlFeaturesAppend = (params) => {
  const { data, element } = params;
  const popupFeatures = element.querySelector('.popup__features');

  if (data) {
    data.forEach((feature) => {

      const li = createListElement(['popup__feature', `popup__feature--${feature}`]);

      popupFeatures.appendChild(li);
    });
  } else {
    popupFeatures.remove();
  }
};

const controlPhotosAppend = (params) => {
  const { data, element } = params;
  if (data) {
    const photosFragment = document.createDocumentFragment();
    data.forEach((photo) => {
      const img = createPhotoElement(
        {
          className: ['popup__photo'],
          src: photo,
          width: POPUP_PHOTO_WIDTH,
          height: POPUP_PHOTO_HEIGHT
        }
      );
      photosFragment.append(img);
    });
    element.querySelector('.popup__photos').appendChild(photosFragment);
  } else {
    element.querySelector('.popup__photos').remove();
  }
};

const createFullDescriptionPopup = (point) => {
  const popupElement = realtyCardTemplate.cloneNode(true);

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

  controlDataAppend({
    element: popupElement,
    selector: '.popup__description',
    data: point.offer.description,
  });

  popupElement.querySelector('.popup__photos').innerHTML = '';
  controlPhotosAppend({
    data: point.offer.photos,
    element: popupElement
  });
  return popupElement;
};

export { createFullDescriptionPopup };

