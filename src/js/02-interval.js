import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

let count = 0;

setInterval(() => {
  console.log(count++);
}, 1000);

/*
 * Видалення інтервалу с clearInterval(intervalId)
 */
