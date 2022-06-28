import { createObjectsArray } from './data.mjs';
import { controlAppendElement } from './util.mjs';

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
      data: popupElement.offer.title,
      needed: Boolean(popupElement.offer.title)
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--address',
      data: popupElement.offer.address,
      needed: Boolean(popupElement.offer.address)
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--price',
      data: `${popupElement.offer.price} ₽/ночь`,
      needed: Boolean(popupElement.offer.price)
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__type',
      data: offerType[popupElement.offer.type],
      needed: Boolean(popupElement.offer.type)
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--capacity',
      data: `${popupElement.offer.rooms} комнаты для ${popupElement.offer.guests} гостей`,
      needed: Boolean(popupElement.offer.rooms) && Boolean(popupElement.offer.guests),
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__text--time',
      data: `Заезд после ${popupElement.offer.checkin}, выезд до ${popupElement.offer.checkout}`,
      needed: Boolean(popupElement.offer.checkin) && Boolean(popupElement.offer.checkout),
    }
  );

  controlAppendElement(
    {
      element: popupTemplate,
      selector: '.popup__description',
      data: popupElement.offer.description,
      needed: Boolean(popupElement.offer.description)
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
      const li = document.createElement('li');
      li.classList.add('popup__feature', `popup__feature--${feature}`);
      popupTemplate.querySelector('.popup__features').appendChild(li);
    });
  } else {
    popupTemplate.querySelector('.popup__features').remove();
  }

  popupTemplate.querySelector('.popup__photos').innerHTML = '';
  if (popupElement.offer.photos) {
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

