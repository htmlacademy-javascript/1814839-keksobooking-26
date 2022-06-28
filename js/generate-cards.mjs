import { createObjectsArray } from './data.mjs';
import { boolean, controlAppendElement } from './util.mjs';

const mapCanvas = document.querySelector('#map-canvas');

const popup = document.querySelector('#card')
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

const popupsFragment = document.createDocumentFragment();

popupsArray.forEach((popupElement) => {
  const card = popup.cloneNode(true);

  controlAppendElement(
    card,
    '.popup__title',
    popupElement.offer.title,
    boolean(popupElement.offer.title),
  );

  controlAppendElement(
    card,
    '.popup__text--address',
    popupElement.offer.address,
    boolean(popupElement.offer.address),
  );

  controlAppendElement(
    card,
    '.popup__text--price',
    `${popupElement.offer.price} ₽/ночь`,
    boolean(popupElement.offer.price),
  );

  controlAppendElement(
    card,
    '.popup__type',
    offerType[popupElement.offer.type],
    boolean(popupElement.offer.type),
  );

  controlAppendElement(
    card,
    '.popup__text--capacity',
    `${popupElement.offer.rooms} комнаты для ${popupElement.offer.guests} гостей`,
    boolean(popupElement.offer.rooms) && boolean(popupElement.offer.guests),
  );

  controlAppendElement(
    card,
    '.popup__text--time',
    `Заезд после ${popupElement.offer.checkin}, выезд до ${popupElement.offer.checkout}`,
    boolean(popupElement.offer.checkin) && boolean(popupElement.offer.checkout),
  );

  controlAppendElement(
    card,
    '.popup__description',
    popupElement.offer.description,
    boolean(popupElement.offer.description),
  );

  if (boolean(popupElement.author.avatar)) {
    card.querySelector('.popup__avatar').src = popupElement.author.avatar;
  } else {
    card.querySelector('.popup__avatar').remove();
  }

  card.querySelector('.popup__features').innerHTML = '';
  if (boolean(popupElement.offer.features)) {
    popupElement.offer.features.forEach((feature) => {
      const li = document.createElement('li');
      li.classList.add('popup__feature', `popup__feature--${feature}`);
      card.querySelector('.popup__features').appendChild(li);
    });
  } else {
    card.querySelector('.popup__features').remove();
  }

  card.querySelector('.popup__photos').innerHTML = '';
  if (boolean(popupElement.offer.photos)) {
    popupElement.offer.photos.forEach((photo) => {
      const img = document.createElement('img');
      img.classList.add('popup__photo');
      img.src = photo;
      img.width = 45;
      img.height = 40;
      card.querySelector('.popup__photos').appendChild(img);
    });
  } else {
    card.querySelector('.popup__photos').remove();
  }

  popupsFragment.append(card);
});

mapCanvas.append(popupsFragment);

