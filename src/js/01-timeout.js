import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

console.log('start');

const timeoutId = setTimeout(() => {
  console.log('Hello');
}, 5000);

console.log('End');

/*
 * Видалення таймаута с clearTimeout(timeoutId)
 */

clearTimeout(timeoutId);
