import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

//Set today 
const today={
    full_date: new Date(),
    current: new Date().toISOString().slice(0, 10),
    glasses: 0,
} 
//flag for checking if today is current date in saved localStorag
let isCurrent=false;

//Make DATA localStorage if it does not exists and add current date in such case
checkLocalStorage();

//check localStorage first. Assign alldata to current local storage or NULL if it doesnt exists

checkToday();

if(isCurrent) {
    var alldata=[];
    alldata.push(today);
    saveToLocalStorage();
    }
else {
    //check if theres today in saved localStorage and add it if there is not
    if(checkToday()) {

    }
}

function checkLocalStorage() {
    if(localStorage.getItem("data")){
        console.log("iside checkLocalStorage: IF IS TRUE ",localStorage.getItem("data"))
        return 1;
    }
    else {
        console.log("iside checkLocalStorage: IF IS FALSE ",localStorage.getItem("data"))
        saveToLocalStorage();
        return 0;
    }
    
}

//check if theres today in saved localStorage and add it if there is not
function checkToday() {
    
    var alldata= [];
    alldata.push(JSON.parse(localStorage.getItem("data")));
    console.log("inside function checkToday, ", alldata);
    console.log(`Inside checkToday, alldata type is: `,typeof(alldata));


    if(alldata===null) {
        isCurrent=false;
        return 0;
    }
    else {
        let tmp=alldata.at(-1);
        console.log(`Inside checkToday ELSE , check tmp value ${tmp.current}`);
            if(tmp.current==today.current) {
            isCurrent=true;
            console.log(`Inside checkToday, data is existing, isCurrent value: ${isCurrent}`)
            return 1;
            }
            else return 0;
        }
}     




//check if today exist in dataset and if not, create it.
// if(data) {
//     //data.push(entry1); test entry
//     data.push(today); //current date
    
//     console.log(data);
// }
// let datastring=JSON.stringify(data);
// console.log(datastring);

// let readData=[];
// readData=JSON.parse(datastring);
// console.log(readData);

//change text value to glass number 
const text = document.querySelector(".form__text");
function glassCount() {
    text.innerText=today.glasses;
    
}
saveToLocalStorage();

function saveToLocalStorage() {
    //data array to string
    let datastring;
    datastring=JSON.stringify(today);
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
    


}

const add=document.querySelector(".form__image");
const remove=document.querySelector(".form__button");

add.addEventListener('click', event => {
        today.glasses+=1; 
        glassCount();
        saveToLocalStorage();
})
remove.addEventListener('click', event => {
    
    
        if(today.glasses!=0) {
            today.glasses-=1;
            }
        
        glassCount();
        saveToLocalStorage();
})

window.addEventListener('load', (event) => {
    glassCount();
})