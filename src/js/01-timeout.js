import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

const listId = [];

for (let i = 0; i < 10; i++) {
  const id = setTimeout(() => {
    console.log(i);
  }, i * 1000);

  listId.push(id);
}

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

console.log(listId);
const idForDelete = listId[5];

clearTimeout(idForDelete);
