import { createObjectsArray } from './data.mjs';
import { boolean, controlAppendElement } from './util.mjs';

const mapCanvas = document.querySelector('#map-canvas');

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const offerType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const cardsArray = createObjectsArray();

const cardsFragment = document.createDocumentFragment();

cardsArray.forEach((cardElement) => {
  const card = cardTemplate.cloneNode(true);

  controlAppendElement(
    card,
    '.popup__title',
    cardElement.offer.title,
    boolean(cardElement.offer.title),
  );

  controlAppendElement(
    card,
    '.popup__text--address',
    cardElement.offer.address,
    boolean(cardElement.offer.address),
  );

  controlAppendElement(
    card,
    '.popup__text--price',
    `${cardElement.offer.price} ₽/ночь`,
    boolean(cardElement.offer.price),
  );

  controlAppendElement(
    card,
    '.popup__type',
    offerType[cardElement.offer.type],
    boolean(cardElement.offer.type),
  );

  controlAppendElement(
    card,
    '.popup__text--capacity',
    `${cardElement.offer.rooms} комнаты для ${cardElement.offer.guests} гостей`,
    boolean(cardElement.offer.rooms) && boolean(cardElement.offer.guests),
  );

  controlAppendElement(
    card,
    '.popup__text--time',
    `Заезд после ${cardElement.offer.checkin}, выезд до ${cardElement.offer.checkout}`,
    boolean(cardElement.offer.checkin) && boolean(cardElement.offer.checkout),
  );

  controlAppendElement(
    card,
    '.popup__description',
    cardElement.offer.description,
    boolean(cardElement.offer.description),
  );

  if (boolean(cardElement.author.avatar)) {
    card.querySelector('.popup__avatar').src = cardElement.author.avatar;
  } else {
    card.querySelector('.popup__avatar').remove();
  }

  card.querySelector('.popup__features').innerHTML = '';
  if (boolean(cardElement.offer.features)) {
    cardElement.offer.features.forEach((feature) => {
      const li = document.createElement('li');
      li.classList.add('popup__feature', `popup__feature--${feature}`);
      card.querySelector('.popup__features').appendChild(li);
    });
  } else {
    card.querySelector('.popup__features').remove();
  }

  card.querySelector('.popup__photos').innerHTML = '';
  if (boolean(cardElement.offer.photos)) {
    cardElement.offer.photos.forEach((photo) => {
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

  cardsFragment.append(card);
});

mapCanvas.append(cardsFragment);

