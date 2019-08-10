// eslint-disable-next-line no-console
console.log('Hello Project.');

import clickHandler from './clickHandler';

const button = document.getElementById('js-click-me');
button.addEventListener('click', clickHandler);
