//constants
const MIN_AVATAR_NUM_URL = 1;
const MAX_AVATAR_NUM_URL = 10;
const AVATAR_PAD_START = 2;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

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
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.'
];

//functions

const getRandomNumber = (min, max) => (Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (array) => (array[Math.floor(Math.random() * array.length)]);

function getArray(features) {
  const maxLength = features.length;
  const arrayLength = Math.floor(getRandomNumber(1, maxLength));
  const newArray = [];

  while (newArray.length < arrayLength) {
    const index = Math.floor(getRandomNumber(1, maxLength - 1));
    const element = features[index];

    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

const createObject = () => {
  const locLat = getRandomNumber(LAT_MIN, LAT_MAX);
  const locLng = getRandomNumber(LNG_MIN, LNG_MAX);
  const locLatLng = {
    lat: locLat,
    lng: locLng,
  };

  const newObject = {
    author: {
      avatar: `img/avatars/user${String(Math.floor(getRandomNumber(MIN_AVATAR_NUM_URL, MAX_AVATAR_NUM_URL))).padStart(AVATAR_PAD_START, '0')}.png`
    },

    offer: {
      title: getRandomArrayElement(TITLE_ARRAY),
      address: `${locLatLng.lat}, ${locLatLng.lng}`,
      price: Math.floor(getRandomNumber(1000, 50000)),
      type: getRandomArrayElement(TYPE_ARRAY),
      rooms: Math.floor(getRandomNumber(1, 10)),
      guests: Math.floor(getRandomNumber(1, 10)),
      checkin: getRandomArrayElement(CHECK_IN_OUT_ARRAY),
      checkout: getRandomArrayElement(CHECK_IN_OUT_ARRAY),
      features: getArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getArray(PHOTOS)
    },

    locaton: locLatLng,
  };
  return newObject;
};

console.log(createObject());
