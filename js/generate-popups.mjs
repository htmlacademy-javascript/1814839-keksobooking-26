import { createRealtyDescriptionCards } from './data.mjs';
import { createPhotoElement, createListElement } from './util.mjs';

const mapCanvas = document.querySelector('#map-canvas');
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

const realtyCards = createRealtyDescriptionCards();

const realtyCardTemplateFragment = document.createDocumentFragment();

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
  if (data) {
    data.forEach((feature) => {

      const li = createListElement(['popup__feature', `popup__feature--${feature}`]);

      element.querySelector('.popup__features').appendChild(li);
    });
  } else {
    element.querySelector('.popup__features').remove();
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
          width: 45,
          height: 40
        }
      );
      photosFragment.append(img);
    });
    element.querySelector('.popup__photos').appendChild(photosFragment);
  } else {
    element.querySelector('.popup__photos').remove();
  }
};

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
  controlAvatarAppend(
    {
      selector: '.popup__avatar',
      element: newCardTemplate,
      url: card.author.avatar
    }
  );

  newCardTemplate.querySelector('.popup__features').innerHTML = '';
  controlFeaturesAppend(
    {
      data: card.offer.features,
      element: newCardTemplate
    }
  );

  newCardTemplate.querySelector('.popup__photos').innerHTML = '';
  controlPhotosAppend({
    data: card.offer.photos,
    element: newCardTemplate
  });

  realtyCardTemplateFragment.append(newCardTemplate);
});

mapCanvas.append(realtyCardTemplateFragment);

