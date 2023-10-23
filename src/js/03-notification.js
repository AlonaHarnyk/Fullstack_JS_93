import '../css/common.css';

/**
 * - Показуємо та приховуємо додаючи/видаляючи клас is-visible
 * - Приховуємо через певний час
 * - Приховуємо при натисканні
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {};

/*
 * Функции
 */
