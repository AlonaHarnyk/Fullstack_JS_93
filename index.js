// try {
//   console.log(b);
// } catch (error) {
//   console.log(error);
// }

// console.log(100);

// const b = 10;

// localStorage.setItem('theme', 'dark')
// localStorage.setItem('token', 'darkbvjkbo687y89vygt78y98iugbuiguyf7')
// console.log(localStorage.getItem('token'))

const data = JSON.stringify({a: 1, b: 2})
localStorage.setItem('data', JSON.stringify([1, 2, 3]))

const dataFromLS = JSON.parse(localStorage.getItem('data'))
console.log(dataFromLS)


