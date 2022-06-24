import { createObjectsArray } from './data.mjs';

const mapCanvas = document.querySelector('#map-canvas');

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

//проходя по массиву, для каждого элемента массива мы создаем img с соответствующим src, полученное записываем в popup__photos

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
  card.querySelector('.popup__features').textContent = cardElement.offer.features;
  card.querySelector('.popup__description').textContent = cardElement.offer.description;

  card.querySelector('.popup__photos').innerHTML = '';
  cardElement.offer.photos.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo;
    card.querySelector('.popup__photos').appendChild(img);
  });

  card.querySelector('.popup__avatar').src = cardElement.author.avatar;
  mapCanvas.appendChild(card);
});


