import '../css/common.css';

/**
 * - Показуємо та приховуємо додаючи/видаляючи клас is-visible
 * - Приховуємо через певний час
 * - Приховуємо при натисканні
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', () => {
  clearTimeout(timeoutId);
  hideNotification();
});

setTimeout(() => {
  showNotification();
  timeoutId = setTimeout(hideNotification, 5000);
}, NOTIFICATION_DELAY);

/*
 * Функції
 */

function showNotification() {
  console.log('Show');
  refs.notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('Hide');
  refs.notification.classList.remove('is-visible');
}
