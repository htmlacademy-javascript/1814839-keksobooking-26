const housingType = document.querySelector('[name="housing-type"]');

const isThatType = (value) => value.offer.type === 'flat';

export { isThatType };

// нужно сделать фильтр, который бы принимал в себя массив и возвращал новый массив
// отфильтрованный в соответствии с выбранным инпутом
