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
const entry1={
    current: "2021-05-23",
    glasses: 3,
}

let data = [];

//check if today exist in dataset and if not, create it.
if(data) {
    data.push(entry);
    data.push(entry1);
    
    console.log(data);
}
let datastring=JSON.stringify(data);
console.log(datastring);

let readData=[];
readData=JSON.parse(datastring);
console.log(readData);

// console.log(localStorage.getItem('data'));

// let datastring="";
// for(let i=0;data.length;i++) {
//     console.log('Ilość pętli for:' $i);
//     datastring+=JSON.stringify(data[i]);
// }
// console.log(data);
// console.log(datastring);


function saveToLocalStorage() {
    //data array to string
    let datastring=null;
    for(let i=0;data.length-1;i++) {
        datastring+=JSON.stringify(data[i]);
    }
    console.log(data);
    console.log(datastring);
    
    if(localStorage.getItem('data')==null) {
        localStorage.setItem('data', datastring);
    }
    else {

    }
    let alldata =[];

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