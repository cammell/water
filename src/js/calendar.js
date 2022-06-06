console.log('hello from calendar');
import '../scss/main.scss';
import '../scss/calendar.scss';
import calendarize from 'calendarize';


const view = calendarize(new Date ());
const date = new Date();
console.log(`Calendarize array ${view}`);
console.log(date.getDate());

const textLabels = {
    en: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
 };

//Navigation arrows 
let navi=document.querySelector(".arrow");
navi.addEventListener('click', event => {
    
    if(document.location.pathname=="/index.html") 
        document.location.assign("/history.html");
    else 
        document.location.assign("/index.html");

    

})

const $ = document.querySelector.bind(document);
const h = tag => document.createElement(tag);


const labels = $('#calendar .labels');
const dates = $('#calendar .dates');

const lspan = Array.from({ length: 7 }, () => {
    return labels.appendChild(h('span'));
  });
  
  const dspan = Array.from({ length: 42 }, () => {
    return dates.appendChild(h('span'));
  });