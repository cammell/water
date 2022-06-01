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



//check localStorage first. Assign alldata to current local storage or NULL if it doesnt exists

checkToday();





//check if theres today in saved localStorage and add it if there is not
function checkToday() {
    console.log(`Inside checkToday, b4 if loops`);
    if(localStorage.getItem('data')) {
        console.log(`Inside checkToday, LOCAL STORAGE already exists`);
        var alldata= [];
        alldata.push(JSON.parse(localStorage.getItem("data")));
        let tmp=alldata.at(-1);
        console.log(`Inside checkToday, tmp last value: ${tmp}`);
        if(tmp.current==today.current) {
            isCurrent=true;
            console.log(`Inside checkToday, data is existing, isCurrent value: ${isCurrent}`)
            today.glasses=alldata.at(-1).glasses;
            console.log(`Inside checkToday, TODAY already exists`);
            return 1;
            } else {
                isCurrent=false;
                return 0;
            } 
    } else {
        isCurrent=false;
        return 0;
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
    if(isCurrent) {
       saveToLocalStorage();
    }
        else {
            saveToLocalStorage();
            glassCount();
        }
}


function saveToLocalStorage() {
    let alldata =[];
    console.log("inside function saveToLocalStorage, after declaration alldata type: ", typeof(alldata));
    
    
    if(localStorage.getItem('data')==null) {
        localStorage.setItem('data', JSON.stringify(today));
        alldata.push(JSON.parse(localStorage.getItem('data')));
        console.log("inside function saveToLocalStorage, after first data save check object: ", alldata.at(-1).current);
        console.log("inside function saveToLocalStorage, after JSON value PUSH alldata type: ", typeof(alldata));

        

        isCurrent=true;
    }
    else  {
        
        alldata=alldata.concat(JSON.parse(localStorage.getItem('data')));        
        console.log("inside function saveToLocalStorage, after JSON value passing alldata type: ", typeof(alldata));
        if (alldata.at(-1).current!=today.current) {
            console.log("inside function saveToLocalStorage, alldata current value: ", alldata.at(-1));
            console.log("inside function saveToLocalStorage, alldata current value: ", alldata.at(-1).current);
            console.log("inside function saveToLocalStorage, today current value: ", today.current);
            alert("Im about to add today to curent localStorage");
            alldata.push(today);
            localStorage.setItem('data', JSON.stringify(alldata));
            isCurrent=true;
            }
        else {
            alldata.at(-1).glasses=today.glasses;
            localStorage.setItem('data', JSON.stringify(alldata));
            isCurrent=true;
            
        }


        }   
    alldata=null;
}


//Restricted JS for index page only part
if(document.location.pathname=="/index.html") {
    const add=document.querySelector(".form__image");
    const remove=document.querySelector(".form__button");
    add.addEventListener('click', event => {
        today.glasses+=1; 
        glassCount();
     })
     remove.addEventListener('click', event => {
    
    
        if(today.glasses!=0) {
            today.glasses-=1;
            }
            
        glassCount();        
        })
    //change default text in the glass for number of glasses
    window.addEventListener('load', (event) => {
            glassCount();
    })
}
let navi=document.querySelector(".arrow");



//Navigation arrows 
navi.addEventListener('click', event => {
    
    if(document.location.pathname=="/index.html") 
        document.location.assign("/history.html");
    else 
        document.location.assign("/index.html");

    

})




//what page im on
console.log(document.location.pathname);