console.log('hello from calendar');

import calendarize from 'calendarize';

const view = calendarize(new Date ());
const date = new Date();
console.log(`Calendarize array ${view}`);
console.log(date.getDate());

const $ = document.querySelector.bind(document);
const h = tag => document.createElement(tag);

