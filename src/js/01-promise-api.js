/*
 * Створення проміса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

/*
 * Цепочки промісів (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(value1 => {
//     console.log(value1, '-> promise1');
//     return [value1];
//   })
//   .catch(err => {
//     console.log('Error', err);
//     return Promise.reject('err');
//   })
//   .then(value2 => {
//     if (value2.length !== 0) {
//       console.log();
//     }
//     return 'food';
//   })
//   .then(value3 => {
//     return value3;
//   })
//   .then(value4 => {
//     console.log('value4->', value4);
//   })
//   .catch(() => {
//     console.log('last catch');
//   })
//   .finally(() => {});
