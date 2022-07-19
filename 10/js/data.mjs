import { getRandomNonInteger, getRandomElement, appendRandomCountElements, getRandomInteger, addPadStart } from './util.mjs';

const MIN_AVATAR_NUM_URL = 1;
const MAX_AVATAR_NUM_URL = 10;
const AVATAR_PAD_START = 2;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const SIMILAR_OBJECTS_COUNT = 10;

const TITLES_OF_REALTY = [
  'Уютное гнездышко',
  'В историческом центре города',
  'Фамильная резиденция',
  'В стиле ар-деко',
  'Для утонченных натур',
  'Можно с собаками!',
  'Лучшее размещение с детьми',
  'По 100% предоплате',
  'Здесь жил Тед Банди',
  'Больше не могу ничего придумать'
];
const TYPES_OF_REALTY = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_OUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Tristique senectus et netus et malesuada fames ac turpis.',
  'Nulla pellentesque dignissim enim sit amet venenatis.',
  'Sit amet consectetur adipiscing elit duis tristique sollicitudin.',
  'Sit amet consectetur adipiscing elit.',
  'Tincidunt vitae semper quis lectus nulla at volutpat diam ut.',
  'Quis lectus nulla at volutpat diam.',
  'Massa tempor nec feugiat nisl pretium fusce id velit.',
  'Egestas integer eget aliquet nibh praesent tristique magna.',
  'Eu feugiat pretium nibh ipsum consequat nisl.'
];
const PHOTO_ADRESS = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
const PHOTOS = [
  `${PHOTO_ADRESS}duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTO_ADRESS}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTO_ADRESS}claire-rendall-b6kAwr1i0Iw.jpg`
];

//---------------------------------------------------------------------------------------------------------------//

const getAvatarUrl = () => {
  const randomInteger = getRandomInteger(MIN_AVATAR_NUM_URL, MAX_AVATAR_NUM_URL);
  const imagePostfix = addPadStart(AVATAR_PAD_START, randomInteger, '0');
  return `img/avatars/user${imagePostfix}.png`;
};

const createRealtyDescriptionCard = () => {
  const locLat = getRandomNonInteger(LAT_MIN, LAT_MAX).toFixed(5);
  const locLng = getRandomNonInteger(LNG_MIN, LNG_MAX).toFixed(5);
  return {
    author: {
      avatar: getAvatarUrl(),
    },
    offer: {
      title: getRandomElement(TITLES_OF_REALTY
      ),
      address: `${locLat}, ${locLng}`,
      price: Math.floor(getRandomNonInteger(1000, 50000)),
      type: getRandomElement(TYPES_OF_REALTY),
      rooms: Math.floor(getRandomNonInteger(1, 10)),
      guests: Math.floor(getRandomNonInteger(1, 10)),
      checkin: getRandomElement(CHECK_IN_OUT_TIME),
      checkout: getRandomElement(CHECK_IN_OUT_TIME),
      features: appendRandomCountElements(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: appendRandomCountElements(PHOTOS)
    },
    location: {
      lat: locLat,
      lng: locLng,
    }
  };
};

const createRealtyDescriptionCards = () => Array.from({ length: SIMILAR_OBJECTS_COUNT }, createRealtyDescriptionCard);

export { createRealtyDescriptionCards };
