import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')



const entry={
    current: new Date().toISOString().slice(0, 10),
    glasses: 0,
}

let data = [];

//check if today exist in dataset and if not, create it.
if(data) {
    data.push(entry);
    console.log(data[0]);
}

const add=document.querySelector(".form__image");
const remove=document.querySelector(".form__button");

add.addEventListener('click', event => {



})