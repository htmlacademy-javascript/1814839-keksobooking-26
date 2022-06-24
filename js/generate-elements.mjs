import { createObjectsArray } from './data.mjs';

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

  card.querySelector('.popup__title').textContent = cardElement.offer.title;
  card.querySelector('.popup__text--address').textContent = cardElement.offer.address;
  card.querySelector('.popup__text--price').textContent = `${cardElement.offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = offerType[cardElement.offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${cardElement.offer.rooms} комнаты для ${cardElement.offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${cardElement.offer.checkin}, выезд до ${cardElement.offer.checkout}`;

  card.querySelector('.popup__features').innerHTML = '';
  cardElement.offer.features.forEach((feature) => {
    const li = document.createElement('li');
    li.classList.add('popup__feature', `popup__feature--${feature}`);
    card.querySelector('.popup__features').appendChild(li);
  });

  card.querySelector('.popup__description').textContent = cardElement.offer.description;

  card.querySelector('.popup__photos').innerHTML = '';
  cardElement.offer.photos.forEach((photo) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = photo;
    img.width = 45;
    img.height = 40;
    card.querySelector('.popup__photos').appendChild(img);
  });

  card.querySelector('.popup__avatar').src = cardElement.author.avatar;

  mapCanvas.appendChild(card);
});
