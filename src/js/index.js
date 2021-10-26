import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


//check localStorage first. Assign alldata to current local storage or NULL if it doesnt exists
const today={
    full_date: new Date(),
    current: new Date().toISOString().slice(0, 10),
    glasses: 0,
} 
//check localStorage first. Assign alldata to current local storage or NULL if it doesnt exists

if(localStorage.getItem("data")===NULL) {
    var alldata=[];
    alldata.push(today);
    saveToLocalStorage();
    }
else {
    //check if theres today in saved localStorage and add it if there is not
    if(checkToday()) {

    }
    
}


//check if theres today in saved localStorage and add it if there is not
let checkToday() {
    var alldata= [];
    alldata=JSON.parse(localStorage.getItem("data"));
}
if(alldata===NULL) {

}

let data = [];


//check if today exist in dataset and if not, create it.
if(data) {
    //data.push(entry1); test entry
    data.push(today); //current date
    
    console.log(data);
}
let datastring=JSON.stringify(data);
console.log(datastring);

let readData=[];
readData=JSON.parse(datastring);
console.log(readData);

//change text value to glass number 
const text = document.querySelector(".form__text");
function glassCount() {
    text.innerText=data[data.length-1].glasses;
    
}
saveToLocalStorage();

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
    datastring=JSON.stringify(data);
    console.log("saveToLocalStorage function: datastring: ", datastring );
    if(localStorage.getItem('data')==null) {
        localStorage.setItem('data', datastring);
    }
    else  {
        let alldata =[];
        alldata=JSON.parse(localStorage.getItem('data'));        
        if (alldata[alldata.length-1]=!today) {
            alldata.push[today];
            localStorage.setItem('data', JSON.parse(alldata));

        }    //check if last entry is today and save current glass number
    }
    
    let alldata =[];
    alldata=JSON.parse(datastring);
    alldata.push(today)

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
    glassCount();
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
        glassCount();
})

window.addEventListener('load', (event) => {
    glassCount();
})