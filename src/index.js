// eslint-disable-next-line no-console
console.log('Hello Project.');

import clickHandler from './clickHandler';

const button = document.getElementById('js-click-me');
button.addEventListener('click', clickHandler);

import sum from './sum';

// eslint-disable-next-line no-console
console.log(sum(2, 5));
