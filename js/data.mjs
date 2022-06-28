import { getRandomNumber, getRandomElement, appendRandomCountElements, getInteger, addPadStart } from './util.mjs';

const MIN_AVATAR_NUM_URL = 1;
const MAX_AVATAR_NUM_URL = 10;
const AVATAR_PAD_START = 2;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const SIMILAR_OBJECTS_COUNT = 10;

const TITLE_ARRAY = [
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
const TYPE_ARRAY = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_OUT_ARRAY = ['12:00', '13:00', '14:00'];
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
  'Eu feugiat pretium nibh ipsum consequat nisl.'];

const PHOTO_ADRESS = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
const PHOTOS = [
  `${PHOTO_ADRESS}duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTO_ADRESS}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTO_ADRESS}claire-rendall-b6kAwr1i0Iw.jpg`
];

//---------------------------------------------------------------------------------------------------------------//

const getAvatarUrl = () => `img/avatars/user${addPadStart(AVATAR_PAD_START, getInteger(MIN_AVATAR_NUM_URL, MAX_AVATAR_NUM_URL))}.png`;

const createObject = () => {
  const locLat = getRandomNumber(LAT_MIN, LAT_MAX).toFixed(5);
  const locLng = getRandomNumber(LNG_MIN, LNG_MAX).toFixed(5);

  return {
    author: {
      avatar: getAvatarUrl(),
    },

    offer: {
      title: getRandomElement(TITLE_ARRAY),
      address: `${locLat}, ${locLng}`,
      price: Math.floor(getRandomNumber(1000, 50000)),
      type: getRandomElement(TYPE_ARRAY),
      rooms: Math.floor(getRandomNumber(1, 10)),
      guests: Math.floor(getRandomNumber(1, 10)),
      checkin: getRandomElement(CHECK_IN_OUT_ARRAY),
      checkout: getRandomElement(CHECK_IN_OUT_ARRAY),
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

const createObjectsArray = () => Array.from({ length: SIMILAR_OBJECTS_COUNT }, createObject);

export { createObjectsArray };
