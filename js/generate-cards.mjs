import { createObjectsArray } from './data.mjs';
import { isObjectDefinded, assignDataToTextContent } from './util.mjs';

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

cardsArray.forEach((cardElement) => {
  const card = cardTemplate.cloneNode(true);

  assignDataToTextContent(
    card,
    '.popup__title',
    cardElement.offer.title,
    isObjectDefinded(cardElement.offer.title),
  );

  assignDataToTextContent(
    card,
    '.popup__text--address',
    cardElement.offer.address,
    isObjectDefinded(cardElement.offer.address),
  );

  assignDataToTextContent(
    card,
    '.popup__text--price',
    `${cardElement.offer.price} ₽/ночь`,
    isObjectDefinded(cardElement.offer.price),
  );

  assignDataToTextContent(
    card,
    '.popup__type',
    offerType[cardElement.offer.type],
    isObjectDefinded(cardElement.offer.type),
  );

  assignDataToTextContent(
    card,
    '.popup__text--capacity',
    `${cardElement.offer.rooms} комнаты для ${cardElement.offer.guests} гостей`,
    isObjectDefinded(cardElement.offer.rooms) && isObjectDefinded(cardElement.offer.guests),
  );

  assignDataToTextContent(
    card,
    '.popup__text--time',
    `Заезд после ${cardElement.offer.checkin}, выезд до ${cardElement.offer.checkout}`,
    isObjectDefinded(cardElement.offer.checkin) && isObjectDefinded(cardElement.offer.checkout),
  );

  assignDataToTextContent(
    card,
    '.popup__description',
    cardElement.offer.description,
    isObjectDefinded(cardElement.offer.description),
  );

  if (isObjectDefinded(cardElement.author.avatar)) {
    card.querySelector('.popup__avatar').src = cardElement.author.avatar;
  } else {
    card.querySelector('.popup__avatar').remove();
  }

  card.querySelector('.popup__features').innerHTML = '';
  if (isObjectDefinded(cardElement.offer.features)) {
    cardElement.offer.features.forEach((feature) => {
      const li = document.createElement('li');
      li.classList.add('popup__feature', `popup__feature--${feature}`);
      card.querySelector('.popup__features').appendChild(li);
    });
  } else {
    card.querySelector('.popup__features').remove();
  }

  card.querySelector('.popup__photos').innerHTML = '';
  if (isObjectDefinded(cardElement.offer.photos)) {
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

  mapCanvas.appendChild(card);
});
