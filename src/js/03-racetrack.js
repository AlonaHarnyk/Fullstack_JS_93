/* 
//
*/

Promise.resolve()

  .then(() => {
    console.log(1);
  })
  .catch(() => {
    console.log('err');
  })

  .then(
    () => {
      console.log(2);
      return Promise.resolve(123);
    },
    () => {
      console.log(2);
      return Promise.resolve(123);
    },
  )

  .then(value => {
    console.log(value);
  });
