import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

// let counter = 0;
// const id = setInterval(
//   id => {
//     console.log(`start - ${id}`);
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log('end');
//   },
//   1000,
//   counter++,
// );

// /*
//  * Очистка интервала с clearInterval(intervalId)
//  */

// setTimeout(() => {
//   console.log('clear');
//   clearInterval(id);
// }, 5000);

setTimeout(() => {
  console.log('start');
}, 100);

setTimeout(() => {
  console.log('mediana');
}, 0);

setTimeout(() => {
  console.log('end');
}, 0);
