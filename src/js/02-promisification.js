/*
 * Промісіфікація:
 * - Функция которая возвращает промис
 */

// function createPromise(value, delay, isActive) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('Hello world', 1000, true);
// const p2 = createPromise('Sorry', 5000, false);
// const p3 = createPromise(100, 2000, true);

// p1.then(value => {
//   console.log('Ok', value);
//   return Promise.reject()
// }).catch(value => {
//   console.log(value);
// });

// p2.then(value => {
//   console.log('Ok', value);
// }).catch(value => {
//   console.log(value);
// });

// p3.then(value => {
//   console.log('Ok', value);
// }).catch(value => {
//   console.log(value);
// });

/*
 * Промісіфікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// ===========================

// function getArray() {
//   const arr = [1, 2, 3, 5, 7, 0];
//   return Promise.resolve(arr);
// }

// ==================================
// function createPromise(value, delay, isActive) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('Hello world', 3000, true);
// const p2 = createPromise(123, 5000, true);
// const p3 = createPromise('Sorry', 2000, false);

// const promises = [p1, p2, p3];

// Promise.allSettled(promises).then(result => {
//   for (let obj of result) {
//     console.log(obj);
//   }
// });

// ====================================
function createPromise(value, delay) {
  const promise = new Promise((resolve, reject) => {
    const rand = Math.random();
    const isActive = rand > 0.3;
    const obj = {
      value,
      delay,
    };

    setTimeout(() => {
      if (isActive) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });

  return promise;
}

const count = 5;
const delay = 3000;
const interval = 1000;

for (let i = 0; i < 5; i++) {
  const promise = createPromise(i, delay + interval * i);

  promise
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
}
