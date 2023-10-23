import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

setTimeout(showNotification, 5000);

timeoutId = setTimeout(hideNotification, 10000);
/*
 * Функции
 */

function showNotification() {
  refs.notification.classList.add('is-visible');
}

function hideNotification() {
  refs.notification.classList.toggle('is-visible');
}

refs.notification.addEventListener('click', () => {
  clearTimeout(timeoutId);
  hideNotification();
});
