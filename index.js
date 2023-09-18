// 'use strict'

// // **Function declaration**
// function fnDeclaration() {
//     console.log(this);
// }

// fnDeclaration()


// // // **Function expression**
// const fnExpression = function () {
//     console.log(this);
// }

// fnExpression()


// // // **Arrow function**
// const fnArrow = () => {
//     console.log(this);
// }

// fnArrow()

// const person1 = {
//     name: 'Olha',
//     hello() {
//         console.log(this)
//         console.log(this.name)
//     }
// }

// person1.hello()

// const person2 = {
//     name: 'Olha',
//     hello: function() {
//         console.log(this)
//         console.log(this.name)
//     }
// }

// person2.hello()

// const person2 = {
//     name: 'Olha',
//     hello: () => {
//         console.log(this)
//     }
// }

// person2.hello()


// const person4 = {
//     name: 'Olha',
//         hello() {
//         console.log(this)

//         const arrowFN = () => {
//             console.log('arrowFN', this)
//         }

//         arrowFN()
//     }
// }

// person4.hello()



// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };


// const audi = {
//     brand: 'Audi',
//     speed: 80,
//   };


// function drive(action, city) {
//     console.log(this)
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год в ${city}. ${action}`);
// }

// drive('Увімкнути ближнє світло', 'Київ')

// drive.call(bmw, 'Увімкнути ближнє світло', 'Київ');
// drive.call(audi, 'Увімкнути клімат-контроль', 'Львів');

// drive.apply(bmw, ['Увімкнути ближнє світло', 'Київ']);
// drive.apply(audi, ['Увімкнути клімат-контроль', 'Львів']);


const bmwDrive = drive.bind(bmw)
bmwDrive('Увімкнути ближнє світло', 'Київ')

// const audiDrive = drive.bind(audi)
// audiDrive('Увімкнути ближнє світло', 'Київ')


