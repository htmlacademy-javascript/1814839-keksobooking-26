import { createRealtyDescriptionCards } from './data.mjs';
import { controlDataAppend, createPhotoElement, createListElement } from './util.mjs';

const mapCanvas = document.querySelector('#map-canvas');

const realtyCardTemplate = document.querySelector('#popupTemplate')
  .content
  .querySelector('.popup');

//realty type
const realtyType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const realtyCards = createRealtyDescriptionCards();

const realtyCardTemplateFragment = document.createDocumentFragment();

realtyCards.forEach((card) => {
  const newCardTemplate = realtyCardTemplate.cloneNode(true);

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__title',
      data: card.offer.title
    }
  );

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__text--address',
      data: card.offer.address
    }
  );

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__text--price',
      data: `${card.offer.price} ₽/ночь`
    }
  );

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__type',
      data: realtyType[card.offer.type]
    }
  );

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__text--capacity',
      data: `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`
    }
  );

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__text--time',
      data: `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`,
    }
  );

  controlDataAppend(
    {
      element: newCardTemplate,
      selector: '.popup__description',
      data: card.offer.description
    }
  );

  //переписать на другую функцию, передать в нее вот это вот все, чтобы было просто прям тут создать, побить на логические части
  if (card.author.avatar) {
    newCardTemplate.querySelector('.popup__avatar').src = card.author.avatar;
  } else {
    newCardTemplate.querySelector('.popup__avatar').remove();
  }

  newCardTemplate.querySelector('.popup__features').innerHTML = '';
  if (card.offer.features) {
    card.offer.features.forEach((feature) => {

      const li = createListElement(['popup__feature', `popup__feature--${feature}`]);

      newCardTemplate.querySelector('.popup__features').appendChild(li);
    });
  } else {
    newCardTemplate.querySelector('.popup__features').remove();
  }

  newCardTemplate.querySelector('.popup__photos').innerHTML = '';
  if (card.offer.photos) {
    const photosFragment = document.createDocumentFragment();
    card.offer.photos.forEach((photo) => {
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
    newCardTemplate.querySelector('.popup__photos').appendChild(photosFragment);
  } else {
    newCardTemplate.querySelector('.popup__photos').remove();
  }

  realtyCardTemplateFragment.append(newCardTemplate);
});

mapCanvas.append(realtyCardTemplateFragment);

