// sort() за замовчуванням сортує в алфавітному порядку. Тобто ось так
//  const names =  [...books].sort();
//  запис коротший чи краще записувати з localeCompare:
//  const names =  [...books].sort((first, second) => first.localeCompare(second))

// const books = ['b', 'M', 'i', 'Q', 'A']

// const names1 =  [...books].sort();
// const names2 =  [...books].sort((first, second) => first.localeCompare(second))
// console.log(names1)
// console.log(names2)

// const map = new Map()
// const a = {a: 1}
// map.set(a, 'string')
// console.log(map)
// console.log(map.get(a))

// Можете відповісти з прикладами різницю між __proto__ and prototype?
//  const num1 = 5;
//  const num2 = 10;
//  const array1 = [];
//  const array2 = []

//  console.log(num1.__proto__ === array2.__proto__)

const array = [1, 2, 3, 4, 5];

// const getSum = (arr) => {
//   return arr.reduce((acc, item, index) => {
//     if (index === 0) {
//       return [item];
//     } else {
//       return [...acc, acc[index - 1] + item];
//     }
//   }, []);
// };

const getSum = (arr) =>
  arr.reduce(
    (acc, item, index) =>
      index === 0 ? [item] : [...acc, acc[index - 1] + item],
    []
  );

console.log(getSum(array)); // // [1, 3, 6, 10, 15]
