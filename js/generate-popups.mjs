import { createObjectsArray } from './data.mjs';
import { controlAppendElement, createPhotoElement, createListElement } from './util.mjs';

const mapCanvas = document.querySelector('#map-canvas');

const popup = document.querySelector('#popupTemplate')
  .content
  .querySelector('.popup');

const offerType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const popupsArray = createObjectsArray();

const popupsTemplateFragment = document.createDocumentFragment();

popupsArray.forEach((popupElement) => {
  const popupTemplate = popup.cloneNode(true);

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__title',
      data: popupElement.offer.title
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--address',
      data: popupElement.offer.address
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--price',
      data: `${popupElement.offer.price} ₽/ночь`
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__type',
      data: offerType[popupElement.offer.type]
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--capacity',
      data: `${popupElement.offer.rooms} комнаты для ${popupElement.offer.guests} гостей`
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--time',
      data: `Заезд после ${popupElement.offer.checkin}, выезд до ${popupElement.offer.checkout}`,
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__description',
      data: popupElement.offer.description
    }
  );

  if (popupElement.author.avatar) {
    popupTemplate.querySelector('.popup__avatar').src = popupElement.author.avatar;
  } else {
    popupTemplate.querySelector('.popup__avatar').remove();
  }

  popupTemplate.querySelector('.popup__features').innerHTML = '';
  if (popupElement.offer.features) {
    popupElement.offer.features.forEach((feature) => {

      const li = createListElement(['popup__feature', `popup__feature--${feature}`]);

      popupTemplate.querySelector('.popup__features').appendChild(li);
    });
  } else {
    popupTemplate.querySelector('.popup__features').remove();
  }

  popupTemplate.querySelector('.popup__photos').innerHTML = '';
  if (popupElement.offer.photos) {
    const photosFragment = document.createDocumentFragment();
    popupElement.offer.photos.forEach((photo) => {
      const img = createPhotoElement(
        {
          className: ['popup__photo'],
          src: photo,
          width: 45,
          height: 40
        }
      );
      photosFragment.append(img);
    });
    popupTemplate.querySelector('.popup__photos').appendChild(photosFragment);
  } else {
    popupTemplate.querySelector('.popup__photos').remove();
  }

  popupsTemplateFragment.append(popupTemplate);
});

mapCanvas.append(popupsTemplateFragment);

