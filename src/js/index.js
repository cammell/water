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
    console.log(data[data.length-1]);
}

const add=document.querySelector(".form__image");
const remove=document.querySelector(".form__button");

add.addEventListener('click', event => {
    let today= new Date().toISOString().slice(0,10);
    if(data[data.length-1].current==today) {
        data[data.length-1].glasses+=1; 
        console.log("Current = today");
    }
    else {
        data[data.length-1].current=today;
        data[data.length-1].glasses=1;
        console.log(typeof data[data.length-1].current);
        console.log(typeof today);
        }
    console.log(data[data.length-1].glasses)
    console.log(data[data.length-1])
})
remove.addEventListener('click', event => {
    let today= new Date().toISOString().slice(0,10);
    if(data[data.length-1].current==today) {
        if(data[data.length-1].glasses!=0) {
            data[data.length-1].glasses-=1;
            }
        else {
            data[data.length-1].glasses=0;
            }
        }
    else {
        data[data.length-1].current=today;
        data[data.length-1].glasses=0;
        }
        console.log(data[data.length-1].glasses)
})