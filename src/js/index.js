/* function foo() {
  console.log('start');

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => 'mid');

  console.log('end');
}

async function foo() {
  console.log('start');

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  console.log(response);

  const data = await response.json();

  console.log(data);

  console.log('end');
}

foo(); */

// async function foo() {
//   return null;
// }

// const result = foo();

// await foo()
// console.log(result);

// =========================

// async function myFoo() {
// const x1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
// const x2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
// const x3 = fetch('https://jsonplaceholder.typicode.com/todos/3');

//   const arr = [x1, x2, x3];
//   const result = await Promise.all(arr);
//   console.log(result);
// }

// myFoo();

// async function foo() {
//   try {
//     const x1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await x1.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// ==============================================

/* 
async function getPokemonList() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  const response = await fetch(url);
  const data = await response.json();
  const pokemonList = data.results;

  const promises = pokemonList.map(pokemon => {
    return fetch(pokemon.url);
  });

  const result = await Promise.all(promises);
  const promises1 = result.map(res => res.json());
  const resultPokemonList = await Promise.all(promises1);
  console.log(resultPokemonList);
}

getPokemonList(); 
*/
