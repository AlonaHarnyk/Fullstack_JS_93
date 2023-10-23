import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

/* 

new Date("2030-03-16");
new Date("2030-03");
new Date("2018");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");

*/

const dateMin = new Date();

// setTimeout(() => {
//   const dateMax = new Date();
//   console.log(dateMax - dateMin);
// }, 2000);

console.log(dateMin.toTimeString());
console.log(dateMin.toLocaleTimeString());
console.log(dateMin.toUTCString());
console.log(dateMin.toDateString());
console.log(dateMin.toLocaleString());
console.log(dateMin.toLocaleDateString());
console.log(dateMin.getTime());
