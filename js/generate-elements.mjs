import { createObjectsArray } from './data.mjs';

const mapCanvas = document.querySelector('#map-canvas');

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const cardsArray = createObjectsArray();

cardsArray.forEach((cardElement) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__title').textContent = cardElement.offer.title;
  mapCanvas.appendChild(card);
});
