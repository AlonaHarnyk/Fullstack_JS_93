// const a = [1, 2, 3, 4, 5]
// for(let i = 0; i < a.length; i+=1) {
//     // console.log(a[i])
//     console.log(a[i] + 10)
// }

// const numbers = [1, 2, 3, 4, 5]

// for(const number of numbers) {
//     // console.log(numbers.indexOf(number))
//     console.log(number + 10)
// }

// ❗️❗️❗️ Присвоєння за посиланням

// const a = 2;
// const b = a;
// console.log(a === b)
// console.log(2 === 2)

// const array1 = [1, 2, 3];

// const array2 = array1;

// console.log(array1)
// console.log(array2)
// console.log(array1 === array2)
// console.log([5, 6, 7] === [5, 6, 7]) //false

// array1[0] = 10;

// console.log(array1)
// console.log(array2);

// array2[2] = 5;

// console.log(array1)

// const array3 = array2

// console.log(array3)

// array3[1] = 100;

// console.log(array1)

// array2.length = 0;

// console.log(array3)

// array1[2] = 1000;
// console.log(array3)
// console.log(array1[0])

// for (const elem of array3) {
//     console.log(elem)
// }

// console.log(array3.length)

// let array1 = [1, 3, 5]
// let array2 = array1;

// array1[0] = 50;
// console.log(array1)
// console.log(array2)

// array1 = [9, 90, 900]

// console.log(array1)
// console.log(array2)

// array2 = array1;

// console.log(array1)
// console.log(array2)

// const a = [1, 2, 3]
// const b = a
// console.log(a === b) // true

// const c = [1, 2, 3]
// const d = [1, 2, 3]
// console.log(c === d) // false
// console.log(c[0] === d[0]) // true

// const e = [1, 2, [3, 4]]
// const f = [1, 2, [3, 4]]
// // console.log(e[2] === f[2]) // false
// // console.log(e[0] === f[0]) // true
// console.log(e[2][0]) // 3

// ❗️❗️❗️ Методи масивів

// const string = '1-!2-!3-!4-!5-!6-!7-!8-!9'
// console.log(string.split('!'))

// const string1 = 'vehq jrf vbh jre bv h'
// console.log(string1.split(' '))

// const string2 = "123456789";
// const array = string2.split("");
// console.log(array);

// for (const element of array) {
//     const number = Number(element)
//     console.log(number)
// }

// for (let i = 0; i < array.length; i += 1) {
//   array[i] = Number(array[i]);
// }

// console.log(array);

// const array3 = [1, 2, 3, 4, 5, 6, 7];
// const string3 = array3.join('')
// console.log(string3)

// const array5 = [1,4,6,7,4,7,89]
// // const res1 = array5.includes(100 && 4)
// // console.log(res1) // true
// const res2 = array5.includes(100) && array5.includes(4)
// // // console.log(res2) // false

// const emptyArray = [0, 90]
// // emptyArray.push(1)
// // console.log(emptyArray)
// // const length1 = emptyArray.push(1)
// // console.log(length1) // 3
// const length2 = emptyArray.push(2, 3, 100, 200, 1000, 100000)
// // console.log(emptyArray)
// console.log(length2)

// const notEmptyArray = [1, 2, 3, 4, 5]
// // notEmptyArray.pop()
// // console.log(notEmptyArray)
// const deletedEl = notEmptyArray.pop()
// console.log(notEmptyArray)
// console.log(deletedEl)

// const superArray = [1, 2, 3, 4, 5]
// const length2 = superArray.unshift(5, 10)
// console.log(superArray)
// console.log(length2)

// const superArray1 = [1, 2, 3, 4, 5]
// const deletedEl1 = superArray1.shift()
// console.log(superArray1)
// console.log(deletedEl1)
