const date = new Date();
const yearsCalendar = () => {
    date.setDate(1);
console.log(date.getDay());
const monthDays = document.querySelector('.days');
const lastDay = new Date(date.getFullYear(),date.getMonth() +1,0).getDate()
console.log(lastDay)


const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate()
console.log(prevLastDay)

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth() +1,0).getDate()
console.log(lastDayIndex)

const nextDays = 7 - lastDayIndex -1

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

document.querySelector('.date h1').innerHTML
=months[date.getMonth()]

document.querySelector('.date p').innerHTML=
new Date().toDateString()
 console.log(months)

 let days = ''

  for(letx = firstDayIndex; x > 0; x--){
    days+= `<div class='prev-date'>${prevLastDay -x}</div>`
 }
 for(let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate() && date.getMonth()=== new Date.getMonth()){
        days += `<div class='today'>${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
    
    
 }

 for(let j =1; j<=nextDays; j++){
    days +=`<div class='next-date'>${j}</div>`;
    monthDays.innerHTML = days
 }

}

 

 document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1)
    yearsCalendar()
 })

 document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1)
    yearsCalendar()
 })

 yearsCalendar()