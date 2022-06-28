import { createObjectsArray } from './data.mjs';
import { boolean, controlAppendElement } from './util.mjs';

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
    popupTemplate,
    '.popup__title',
    popupElement.offer.title,
    boolean(popupElement.offer.title),
  );

  controlAppendElement(
    popupTemplate,
    '.popup__text--address',
    popupElement.offer.address,
    boolean(popupElement.offer.address),
  );

  controlAppendElement(
    popupTemplate,
    '.popup__text--price',
    `${popupElement.offer.price} ₽/ночь`,
    boolean(popupElement.offer.price),
  );

  controlAppendElement(
    popupTemplate,
    '.popup__type',
    offerType[popupElement.offer.type],
    boolean(popupElement.offer.type),
  );

  controlAppendElement(
    popupTemplate,
    '.popup__text--capacity',
    `${popupElement.offer.rooms} комнаты для ${popupElement.offer.guests} гостей`,
    boolean(popupElement.offer.rooms) && boolean(popupElement.offer.guests),
  );

  controlAppendElement(
    popupTemplate,
    '.popup__text--time',
    `Заезд после ${popupElement.offer.checkin}, выезд до ${popupElement.offer.checkout}`,
    boolean(popupElement.offer.checkin) && boolean(popupElement.offer.checkout),
  );

  controlAppendElement(
    popupTemplate,
    '.popup__description',
    popupElement.offer.description,
    boolean(popupElement.offer.description),
  );

  if (boolean(popupElement.author.avatar)) {
    popupTemplate.querySelector('.popup__avatar').src = popupElement.author.avatar;
  } else {
    popupTemplate.querySelector('.popup__avatar').remove();
  }

  popupTemplate.querySelector('.popup__features').innerHTML = '';
  if (boolean(popupElement.offer.features)) {
    popupElement.offer.features.forEach((feature) => {
      const li = document.createElement('li');
      li.classList.add('popup__feature', `popup__feature--${feature}`);
      popupTemplate.querySelector('.popup__features').appendChild(li);
    });
  } else {
    popupTemplate.querySelector('.popup__features').remove();
  }

  popupTemplate.querySelector('.popup__photos').innerHTML = '';
  if (boolean(popupElement.offer.photos)) {
    popupElement.offer.photos.forEach((photo) => {
      const img = document.createElement('img');
      img.classList.add('popup__photo');
      img.src = photo;
      img.width = 45;
      img.height = 40;
      popupTemplate.querySelector('.popup__photos').appendChild(img);
    });
  } else {
    popupTemplate.querySelector('.popup__photos').remove();
  }

  popupsTemplateFragment.append(popupTemplate);
});

mapCanvas.append(popupsTemplateFragment);

