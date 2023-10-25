/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

/*
 * Покемоны с https://pokeapi.co/
 */

// function getData(id, renderArray) {

// }

// let posts;

// getData(3).then(data => {
//   console.log(data);
//   console.log(data);
//   console.log(data);
//   renderArra();
// });

// getData(2).then(data => {
//   posts = data;
// });

// console.log(Promise.resolve(10));

// function getData(err) {
//   return Promise.reject(err);
// }

// getData()
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const newPromise = new Promise((res, rej) => {
//   return res(10);
//   console.log('end');
// });

// ===========================

function createPromise(value, delay, isErr = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isErr) reject(value);
      else resolve(value);
    }, delay);
  });
}

const p1 = createPromise('test1', 5000);
const p2 = createPromise('test2', 2000, true);
const p3 = createPromise('test3', 3000);
const p4 = createPromise('test4', 4000);

Promise.race([p3, p1, p2, p4])
  .then()
  .catch(err => {
    console.log(err);
  });
